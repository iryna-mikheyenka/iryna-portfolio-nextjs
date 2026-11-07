/** Glues short words (a, to, of, in, I...) to the next word so they never hang at the end of a line. */
export function nb(text: string): string {
  return text.replace(/(^|[\s(“"'])([A-Za-z]{1,2}) (?=[\w(“"'])/g, "$1$2 ");
}
