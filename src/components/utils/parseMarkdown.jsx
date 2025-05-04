const parseMarkdown = (text) => {
  // Regular expression to capture the frontmatter block
  const frontmatterPattern = /^---\n([\s\S]*?)\n---/;
  const match = text.match(frontmatterPattern);

  if (match) {
    const frontmatter = match[1]; // Frontmatter block

    // Extract frontmatter properties (title, date, author)
    const title = frontmatter.match(/title:\s*'(.*?)'/)?.[1] || '';
    const date = frontmatter.match(/date:\s*'(.*?)'/)?.[1] || '';
    const author = frontmatter.match(/author:\s*'(.*?)'/)?.[1] || '';

    // Extract the content after the frontmatter
    const content = text.split('---')[2]?.trim() || '';

    // You can further split the content, handle Markdown-to-HTML conversion, or use it as raw text
    let blogData = {
      title,
      date,
      author,
      content,
    };
    return blogData;
  }

  console.error('No frontmatter found in the Markdown file', text);
  return { title: '', date: '', author: '', content: text };
};

export default parseMarkdown;
