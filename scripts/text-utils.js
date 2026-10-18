/**
 * Convert Markdown-ish YAML body text to plain text (resume2互換).
 * - "#### Title" -> "【Title】"（直後の空行は詰める）
 * - "**bold**"   -> "bold"
 * - "- item"     -> "・item"
 */
function toPlainText(md) {
  if (!md) return '';
  return md
    .trim()
    .split('\n')
    .map(line => {
      let l = line.replace(/^#+\s+(.*)$/, '【$1】');
      l = l.replace(/\*\*(.+?)\*\*/g, '$1');
      l = l.replace(/^(\s*)-\s+/, '$1・');
      return l;
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/(【[^\n]*】)\n+/g, '$1\n');
}

module.exports = { toPlainText };
