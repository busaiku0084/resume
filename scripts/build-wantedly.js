const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const ejs = require('ejs');
const { loadData, isPublicMode } = require('./load-data');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const TEMPLATES_DIR = path.join(ROOT, 'templates', 'wantedly');
const OUTPUT_DIR = path.join(ROOT, 'output', 'wantedly');

/**
 * Convert Markdown to plain text for Wantedly (which doesn't support Markdown).
 * - Headings (### foo) → 【foo】
 * - Bold (**foo**) → foo
 * - List items (- foo) → ・foo
 * - Links ([text](url)) → text (url)
 * - Inline code (`foo`) → foo
 */
function mdToPlain(md) {
  if (!md) return '';
  return md
    // Headings: #### foo → 【foo】, ### foo → 【foo】, ## foo → 【foo】
    .replace(/^#{1,6}\s+(.+)$/gm, '【$1】')
    // Bold: **foo** → foo
    .replace(/\*\*(.+?)\*\*/g, '$1')
    // Italic: *foo* → foo (carefully avoid list markers)
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '$1')
    // List markers: - foo / * foo → ・foo
    .replace(/^(\s*)[-*]\s+/gm, '$1・')
    // Links: [text](url) → text (url) ※ omit url if it's an anchor
    .replace(/\[(.+?)\]\((.+?)\)/g, (_m, text, url) => {
      if (url.startsWith('#')) return text;
      return `${text}（${url}）`;
    })
    // Inline code: `foo` → foo
    .replace(/`(.+?)`/g, '$1');
}

function main() {
  const publicMode = isPublicMode(process.argv);
  const data = loadData(publicMode);
  const wantedly = yaml.load(fs.readFileSync(path.join(DATA_DIR, 'wantedly.yaml'), 'utf8'));

  console.log(`Wantedly build mode: ${publicMode ? 'public (会社名非表示)' : 'private (会社名表示)'}`);

  // Ensure output directories
  const projectsOutDir = path.join(OUTPUT_DIR, 'projects');
  fs.mkdirSync(projectsOutDir, { recursive: true });

  // Clean old txt files
  [OUTPUT_DIR, projectsOutDir].forEach(dir => {
    fs.readdirSync(dir)
      .filter(f => f.endsWith('.txt'))
      .forEach(f => fs.unlinkSync(path.join(dir, f)));
  });

  // Generate individual project files (for copy-paste to Wantedly)
  const projectTemplate = fs.readFileSync(
    path.join(TEMPLATES_DIR, 'project.txt.ejs'), 'utf8'
  );

  data.projects.forEach(project => {
    const txt = ejs.render(projectTemplate, { project, mdToPlain });
    const filename = `project${project.id}_${project.name}.txt`;
    fs.writeFileSync(path.join(projectsOutDir, filename), txt);
    console.log(`Generated: output/wantedly/projects/${filename}`);
  });

  // Generate profile file
  const profileTemplate = fs.readFileSync(
    path.join(TEMPLATES_DIR, 'profile.txt.ejs'), 'utf8'
  );
  const profileTxt = ejs.render(profileTemplate, { wantedly });
  fs.writeFileSync(path.join(OUTPUT_DIR, 'profile.txt'), profileTxt);
  console.log('Generated: output/wantedly/profile.txt');

  console.log(`\nWantedly build complete: ${data.projects.length} projects + profile generated.`);
}

main();
