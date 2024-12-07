export const isAnagram = (s: string, t: string) => {
  if (s.length !== t.length) return false;

  const count = new Map<string, number>();

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!count.has(char)) return false;
    count.set(char, count.get(char)! - 1);
  }

  return Array.from(count.values()).every((v) => v === 0);
};
