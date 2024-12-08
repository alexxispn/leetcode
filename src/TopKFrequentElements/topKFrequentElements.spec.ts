import { describe, expect, it } from "vitest";
import { topKFrequentElements } from "./topKFrequentElements.js";

describe("topKFrequentElements", () => {
  it("should return the k most frequent elements", () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 2;

    const result = topKFrequentElements(nums, k);

    expect(result).toEqual(expect.arrayContaining([1, 2]));
  });

  it("should return the k most frequent elements", () => {
    const nums = [1];
    const k = 1;

    const result = topKFrequentElements(nums, k);

    expect(result).toEqual(expect.arrayContaining([1]));
  });

  it("should return the k most frequent elements", () => {
    const nums = [1, 2];
    const k = 2;

    const result = topKFrequentElements(nums, k);

    expect(result).toEqual(expect.arrayContaining([1, 2]));
  });
})
