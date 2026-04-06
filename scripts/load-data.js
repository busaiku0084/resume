const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');

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

/**
 * Build a mapping from company (real name) to public_name.
 */
function buildCompanyMap(career) {
  const map = {};
  career.entries.forEach(entry => {
    if (entry.public_name) {
      map[entry.company] = entry.public_name;
    }
  });
  return map;
}

/**
 * Apply public name masking to career entries and projects.
 * Mutates the data in place.
 */
function applyPublicMode(data) {
  const companyMap = buildCompanyMap(data.career);

  // Mask career entries
  data.career.entries = data.career.entries.map(entry => ({
    ...entry,
    company: entry.public_name || entry.company
  }));

  // Mask project company names
  data.projects = data.projects.map(project => ({
    ...project,
    company: companyMap[project.company] || project.company
  }));

  return data;
}

/**
 * Load all data. If publicMode is true, company names are masked.
 */
function loadData(publicMode) {
  const profile = loadYaml(path.join(DATA_DIR, 'profile.yaml'));
  const pr = loadYaml(path.join(DATA_DIR, 'pr.yaml'));
  const career = loadYaml(path.join(DATA_DIR, 'career.yaml'));
  const skills = loadYaml(path.join(DATA_DIR, 'skills.yaml'));
  const education = loadYaml(path.join(DATA_DIR, 'education.yaml'));
  const projects = loadProjects().sort((a, b) => b.id.localeCompare(a.id));

  const data = { profile, pr, career, skills, education, projects };

  if (publicMode) {
    applyPublicMode(data);
  }

  return data;
}

function isPublicMode(args) {
  return args.includes('--public');
}

module.exports = { loadData, isPublicMode };
