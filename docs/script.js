// resume.md を読み込み、MarkdownをHTMLに変換
fetch('./resume.md')
  .then(response => {
    if (!response.ok) throw new Error('Markdown file not found');
    console.log('resume.md fetched successfully'); // デバッグ用ログ
    return response.text();
  })
  .then(md => {
    console.log('Parsing resume.md:', md); // デバッグ用ログ
    document.getElementById('content').innerHTML = marked.parse(md);

    // 外部Markdownファイルを読み込み
    [...document.querySelectorAll('.html-content')].reverse().forEach((container, index) => {
      const projectFile = `./projects/project${index + 1}.md`;
      console.log(`Fetching project file: ${projectFile}`); // デバッグ用ログ

      fetch(projectFile)
        .then(response => {
          if (!response.ok) throw new Error(`${projectFile} not found`);
          console.log(`Project file ${projectFile} fetched successfully`); // デバッグ用ログ
          return response.text();
        })
        .then(mdContent => {
          console.log(`Parsing project file ${projectFile}:`, mdContent); // デバッグ用ログ
          container.innerHTML = marked.parse(mdContent);
        })
        .catch(error => {
          console.warn(`Skipping file: ${projectFile} - ${error.message}`);
          container.innerHTML = `<p>Error loading Markdown: ${error.message}</p>`;
        });
    });
  })
  .catch(error => {
    console.error('Error fetching resume.md:', error);
    document.getElementById('content').innerHTML = `<p>Error: ${error.message}</p>`;
  });
