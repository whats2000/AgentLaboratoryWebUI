/**
 * A helper function to extract and remove a marker block from text.
 * (A dummy implementation; adjust as needed.)
 * @param text The text to extract the marker block from.
 * @param word The marker to search for.
 */
export function extractPrompt(text: string, word: string): string {
  const pattern = new RegExp(`\`\`\`${word}([\\s\\S]*?)\`\`\``, 'gs');
  const matches = [...text.matchAll(pattern)];
  return matches.map((match) => match[1].trim()).join('\n');
}
