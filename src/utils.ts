export const titleCase = (str: string): string =>
  str
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map(w => (w.length === 0 ? '' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
