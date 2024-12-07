import { describe, expect, it } from "vitest";
import { validParentheses } from "./validParentheses.js";

describe("validParentheses", () => {
  it.each([
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["([])", true],
    ["([)]", false]
  ])(`valid if parentheses are well-formed`, (s, expected) => {
    expect(validParentheses(s)).toEqual(expected);
  });
});
