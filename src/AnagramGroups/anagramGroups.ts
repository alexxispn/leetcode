export const anagramGroups = (strs: string[]) => {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const count = new Array(26).fill(0);

    for (const char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    map.set(count.toString(), map.get(count.toString())?.concat(str) || [str]);
  }

  return Array.from(map.values());
};
