export const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>;

  for (const [i, num] of nums.entries()) {
    const complement = target - num;

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    } else {
      map.set(num, i);
    }
  }

  return [];
};
