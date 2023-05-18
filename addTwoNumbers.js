/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (l1, l2) {
  return iterador(l1, l2);
};

function iterador(l1, l2) {
  if (l1 !== undefined && l2 !== undefined)
    return new ListNode(l1.val + l2.val, iterador(l1.next, l2.next));
  if (l1 !== undefined)
    return new ListNode(l1.val + 0, iterador(l1.next, undefined));
  if (l2 !== undefined)
    return new ListNode(0 + l2.val, iterador(undefined, l2.next));
  return undefined;
}

var addTwoNumbers2 = function (l1, l2) {
  const iter = (n1, n2, rest = 0) => {
    if (!n1 && !n2 && !rest) return null;
    const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
    const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
    return new ListNode(newVal % 10, nextNode);
  };
  return iter(l1, l2);
};

const test = new ListNode(1, new ListNode(1, new ListNode(1, undefined)));

console.log(addTwoNumbers(test, test));
