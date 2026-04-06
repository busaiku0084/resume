const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { mdToPdf } = require('md-to-pdf');
const { loadData, isPublicMode } = require('./load-data');

const ROOT = path.resolve(__dirname, '..');
const TEMPLATES_DIR = path.join(ROOT, 'templates');
const OUTPUT_DIR = path.join(ROOT, 'output');

async function main() {
  const publicMode = isPublicMode(process.argv);
  const data = loadData(publicMode);

  console.log(`PDF mode: ${publicMode ? 'public (会社名非表示)' : 'private (会社名表示)'}`);

  // Generate PDF markdown
  const pdfTemplate = fs.readFileSync(
    path.join(TEMPLATES_DIR, 'pdf', 'resume-pdf.md.ejs'), 'utf8'
  );
  const pdfMd = ejs.render(pdfTemplate, data);

  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Convert to PDF
  const suffix = publicMode ? '-public' : '';
  const pdfPath = path.join(OUTPUT_DIR, `resume${suffix}.pdf`);
  const pdf = await mdToPdf(
    { content: pdfMd },
    {
      dest: pdfPath,
      pdf_options: {
        format: 'A4',
        margin: {
          top: '20mm',
          bottom: '20mm',
          left: '15mm',
          right: '15mm'
        },
        printBackground: true
      },
      stylesheet: [],
      body_class: [],
      css: `
        body {
          font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: #333;
        }
        h1 { font-size: 1.8rem; border-bottom: 2px solid #333; padding-bottom: 0.3rem; }
        h2 { font-size: 1.4rem; border-bottom: 1px solid #ccc; padding-bottom: 0.2rem; margin-top: 1.5rem; }
        h3 { font-size: 1.2rem; margin-top: 1.2rem; }
        h4 { font-size: 1.05rem; margin-top: 1rem; }
        table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem; }
        th, td { border: 1px solid #ccc; padding: 0.5rem; text-align: left; vertical-align: middle; }
        th { background-color: #f5f5f5; font-weight: bold; }
        td span {
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 3px;
          padding: 0.1rem 0.3rem;
          font-size: 0.8rem;
          background-color: #f8f8f8;
          color: #333;
          margin: 0 0.2rem 0.2rem 0;
        }
        ul { padding-left: 1.5rem; }
        li { margin-bottom: 0.3rem; }
        a { color: #0366d6; text-decoration: none; }
      `
    }
  );

  if (pdf) {
    console.log(`Generated: ${pdfPath}`);
  }
}

main().catch(err => {
  console.error('PDF generation failed:', err);
  process.exit(1);
});
