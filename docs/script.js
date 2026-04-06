fetch('./resume.md')
  .then(response => {
    if (!response.ok) throw new Error('Markdown file not found');
    return response.text();
  })
  .then(md => {
    document.getElementById('content').innerHTML = marked.parse(md);
    const htmlContentElements = document.querySelectorAll('.html-content[data-project]');
    htmlContentElements.forEach(container => {
      const projectFile = `./projects/${container.dataset.project}.md`;
      fetch(projectFile)
        .then(response => {
          if (!response.ok) throw new Error(`${projectFile} not found`);
          return response.text();
        })
        .then(mdContent => {
          container.innerHTML = marked.parse(mdContent.trim());
          container.querySelectorAll('ul').forEach(ul => {
            ul.style.listStyle = 'disc';
            ul.style.paddingLeft = '1.5rem';
            ul.style.marginTop = '0.5rem';
            ul.style.marginBottom = '0.5rem';
          });
          container.querySelectorAll('li').forEach(li => {
            li.style.marginBottom = '0.5rem';
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
