/** Glues short words (a, to, of, in, the, and...) to the next word so they never hang at the end of a line. */
export function nb(text: string): string {
  return text.replace(/(?<=^|[\s(\u201c"'\u00a0])([A-Za-z]{1,3}) (?=[\w(\u201c"'])/g, "$1\u00a0");
}
