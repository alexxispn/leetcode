import { describe, expect, it } from "vitest";
import { anagramGroups } from "./anagramGroups.js";

describe("AnagramGroups", () => {
  it("should group anagrams", () => {
    const strs = ["act","pots","tops","cat","stop","hat"]

    const result = anagramGroups(strs);

    expect(result).toEqual(expect.arrayContaining([["act", "cat"], ["pots", "tops", "stop"], ["hat"]]));
  })
})
