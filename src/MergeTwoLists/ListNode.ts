export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }

  static fromArray(numbers: number[]) {
    const dummy = new ListNode();
    let current = dummy;

    for (const number of numbers) {
      current.next = new ListNode(number);
      current = current.next;
    }

    return dummy.next;
  }

  toArray() {
    const result = [];
    let current: ListNode | null = this;

    while (current) {
      result.push(current.val);
      current = current.next;
    }

    return result;
  }
}
