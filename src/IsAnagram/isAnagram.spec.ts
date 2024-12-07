import { describe, expect, it } from "vitest";
import { isAnagram } from "./isAnagram.js";

describe("isAnagram", () => {
  it.each([
    ["anagram", "nagaram", true],
    ["rat", "car", false],
    ["a", "b", false],
    ["abcdefghijklmnopqrstuvwxyzá", "zyxwvutsrqpoñmlkjihgfedcba", false]

  ])(`valid if two strings are anagrams`, (s, t, expected) => {
    expect(isAnagram(s, t)).toEqual(expected);
  });
});
