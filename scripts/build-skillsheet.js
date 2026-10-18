const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { loadData, isPublicMode } = require('./load-data');
const { toPlainText } = require('./text-utils');

const ROOT = path.resolve(__dirname, '..');
const TEMPLATES_DIR = path.join(ROOT, 'templates', 'skillsheet');
const OUTPUT_DIR = path.join(ROOT, 'output', 'skillsheet');

function main() {
  const publicMode = isPublicMode(process.argv);
  const data = loadData(publicMode);

  console.log(`Skillsheet build mode: ${publicMode ? 'public (会社名非表示)' : 'private (会社名表示)'}`);

  // Ensure output directories
  const projectsOutDir = path.join(OUTPUT_DIR, 'projects');
  fs.mkdirSync(projectsOutDir, { recursive: true });

  // Clean old files
  [OUTPUT_DIR, projectsOutDir].forEach(dir => {
    fs.readdirSync(dir)
      .filter(f => f.endsWith('.txt'))
      .forEach(f => fs.unlinkSync(path.join(dir, f)));
  });

  // Generate individual project files (for copy-paste)
  const projectTemplate = fs.readFileSync(
    path.join(TEMPLATES_DIR, 'project.txt.ejs'), 'utf8'
  );

  data.projects.forEach(project => {
    const txt = ejs.render(projectTemplate, { project, toPlainText });
    const filename = `project${project.id}_${project.name}.txt`;
    fs.writeFileSync(path.join(projectsOutDir, filename), txt);
    console.log(`Generated: output/skillsheet/projects/${filename}`);
  });

  // Generate profile (self-introduction) file
  const profileTemplate = fs.readFileSync(
    path.join(TEMPLATES_DIR, 'profile.txt.ejs'), 'utf8'
  );
  const profileTxt = ejs.render(profileTemplate, { ...data, toPlainText });
  fs.writeFileSync(path.join(OUTPUT_DIR, 'profile.txt'), profileTxt);
  console.log('Generated: output/skillsheet/profile.txt');

  console.log(`\nSkillsheet build complete: ${data.projects.length} projects + profile generated.`);
}

main();
