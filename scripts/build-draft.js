const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const ejs = require('ejs');
const { loadData, isPublicMode } = require('./load-data');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const TEMPLATES_DIR = path.join(ROOT, 'templates', 'draft');
const OUTPUT_DIR = path.join(ROOT, 'output', 'draft');

function main() {
  const publicMode = isPublicMode(process.argv);
  const data = loadData(publicMode);
  const draft = yaml.load(fs.readFileSync(path.join(DATA_DIR, 'draft.yaml'), 'utf8'));

  console.log(`Draft build mode: ${publicMode ? 'public (会社名非表示)' : 'private (会社名表示)'}`);

  // Ensure output directories
  const projectsOutDir = path.join(OUTPUT_DIR, 'projects');
  fs.mkdirSync(projectsOutDir, { recursive: true });

  // Clean old files
  [OUTPUT_DIR, projectsOutDir].forEach(dir => {
    fs.readdirSync(dir)
      .filter(f => f.endsWith('.md'))
      .forEach(f => fs.unlinkSync(path.join(dir, f)));
  });

  // Generate individual project files (for copy-paste)
  const projectTemplate = fs.readFileSync(
    path.join(TEMPLATES_DIR, 'project.md.ejs'), 'utf8'
  );

  data.projects.forEach(project => {
    const md = ejs.render(projectTemplate, { project });
    const filename = `project${project.id}_${project.name}.md`;
    fs.writeFileSync(path.join(projectsOutDir, filename), md);
    console.log(`Generated: output/draft/projects/${filename}`);
  });

  // Generate profile items file
  const profileTemplate = fs.readFileSync(
    path.join(TEMPLATES_DIR, 'profile.md.ejs'), 'utf8'
  );
  const profileMd = ejs.render(profileTemplate, { draft });
  fs.writeFileSync(path.join(OUTPUT_DIR, 'profile.md'), profileMd);
  console.log('Generated: output/draft/profile.md');

  console.log(`\nDraft build complete: ${data.projects.length} projects + profile generated.`);
}

main();
