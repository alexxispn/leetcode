import { describe, expect, it } from "vitest";
import { ListNode } from "./ListNode.js";
import { mergeTwoLists } from "./mergeTwoLists.js";

describe("mergedList", () => {
  it("should return a merged list", () => {
    const list1 = ListNode.fromArray([1, 2, 4]);
    const list2 = ListNode.fromArray([1, 3, 4]);

    const result = mergeTwoLists(list1, list2);

    expect(result?.toArray()).toEqual([1, 1, 2, 3, 4, 4]);
  });
});
