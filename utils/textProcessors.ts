
export const sanitizeHtmlToPlainText = (htmlString: string | undefined): string => {
  if (!htmlString) return '';
  // Replace HTML tag characters with their escaped entities
  // React typically does this automatically for string children,
  // but this explicit step ensures robust plain text rendering
  // in case of unexpected content or rendering contexts.
  return htmlString
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};
