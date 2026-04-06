const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { loadData, isPublicMode } = require('./load-data');

const ROOT = path.resolve(__dirname, '..');
const TEMPLATES_DIR = path.join(ROOT, 'templates');
const DOCS_DIR = path.join(ROOT, 'docs');
const PROJECTS_OUT_DIR = path.join(DOCS_DIR, 'projects');

function main() {
  const publicMode = isPublicMode(process.argv);
  const data = loadData(publicMode);

  console.log(`Build mode: ${publicMode ? 'public (会社名非表示)' : 'private (会社名表示)'}`);

  // Generate resume.md
  const resumeTemplate = fs.readFileSync(
    path.join(TEMPLATES_DIR, 'resume.md.ejs'), 'utf8'
  );
  const resumeMd = ejs.render(resumeTemplate, data);
  fs.writeFileSync(path.join(DOCS_DIR, 'resume.md'), resumeMd);
  console.log('Generated: docs/resume.md');

  // Generate individual project files
  fs.mkdirSync(PROJECTS_OUT_DIR, { recursive: true });
  const projectTemplate = fs.readFileSync(
    path.join(TEMPLATES_DIR, 'project.md.ejs'), 'utf8'
  );

  // Clean old project files
  const existingFiles = fs.readdirSync(PROJECTS_OUT_DIR).filter(f => f.endsWith('.md'));
  existingFiles.forEach(f => fs.unlinkSync(path.join(PROJECTS_OUT_DIR, f)));

  data.projects.forEach(project => {
    const md = ejs.render(projectTemplate, { project });
    const filename = `project${project.id}.md`;
    fs.writeFileSync(path.join(PROJECTS_OUT_DIR, filename), md);
    console.log(`Generated: docs/projects/${filename}`);
  });

  console.log(`\nBuild complete: ${data.projects.length} projects generated.`);
}

main();
