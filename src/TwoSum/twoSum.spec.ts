import { describe, expect, it } from "vitest";
import { twoSum } from "./twoSum.js";

describe("twoSum", () => {
    it.each([
      [[2, 7, 11, 15], 9, [0, 1]],
      [[3, 2, 4], 6, [1, 2]],
      [[3, 3], 6, [0, 1]]
    ])(`returns the position of the two numbers that add up to the target`, (nums, target, expected) => {
      expect(twoSum(nums, target)).toEqual(expected);
    });
  });
