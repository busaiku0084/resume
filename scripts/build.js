const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const ejs = require('ejs');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const TEMPLATES_DIR = path.join(ROOT, 'templates');
const DOCS_DIR = path.join(ROOT, 'docs');
const PROJECTS_OUT_DIR = path.join(DOCS_DIR, 'projects');

function loadYaml(filePath) {
  return yaml.load(fs.readFileSync(filePath, 'utf8'));
}

function loadProjects() {
  const projectsDir = path.join(DATA_DIR, 'projects');
  const files = fs.readdirSync(projectsDir)
    .filter(f => f.endsWith('.yaml'))
    .sort();
  return files.map(f => loadYaml(path.join(projectsDir, f)));
}

function main() {
  // Load data
  const profile = loadYaml(path.join(DATA_DIR, 'profile.yaml'));
  const pr = loadYaml(path.join(DATA_DIR, 'pr.yaml'));
  const career = loadYaml(path.join(DATA_DIR, 'career.yaml'));
  const skills = loadYaml(path.join(DATA_DIR, 'skills.yaml'));
  const education = loadYaml(path.join(DATA_DIR, 'education.yaml'));
  const projects = loadProjects().sort((a, b) => b.id.localeCompare(a.id));

  const data = { profile, pr, career, skills, education, projects };

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

  projects.forEach(project => {
    const md = ejs.render(projectTemplate, { project });
    const filename = `project${project.id}.md`;
    fs.writeFileSync(path.join(PROJECTS_OUT_DIR, filename), md);
    console.log(`Generated: docs/projects/${filename}`);
  });

  console.log(`\nBuild complete: ${projects.length} projects generated.`);
}

main();
