fetch('./resume.md')
  .then(response => {
    if (!response.ok) throw new Error('Markdown file not found');
    return response.text();
  })
  .then(md => {
    document.getElementById('content').innerHTML = marked.parse(md);
    const htmlContentElements = [...document.querySelectorAll('.html-content')].reverse();
    htmlContentElements.forEach((container, index) => {
      const projectFile = `./projects/project${index + 1}.md`;
      fetch(projectFile)
        .then(response => {
          if (!response.ok) throw new Error(`${projectFile} not found`);
          return response.text();
        })
        .then(mdContent => {
          // MarkdownをHTMLに変換して挿入
          container.innerHTML = marked.parse(mdContent.trim());
          container.querySelectorAll('ul').forEach((ul) => {
            ul.style.listStyle = 'disc'; // 箇条書きを適切に表示
            ul.style.paddingLeft = '1.5rem'; // インデントを適用
            ul.style.marginTop = '0.5rem'; // リストの上部に余白を追加
            ul.style.marginBottom = '0.5rem'; // リストの下部に余白を追加
          });
          container.querySelectorAll('li').forEach((li) => {
            li.style.marginBottom = '0.5rem'; // 各項目の余白を追加
          });
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
