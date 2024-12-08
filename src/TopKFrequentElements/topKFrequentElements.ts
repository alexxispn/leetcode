export const topKFrequentElements = (nums: number[], k: number) => {
  const count = new Map<number, number>();

  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  const sorted = Array.from(count.entries()).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map(([num]) => num);
};
