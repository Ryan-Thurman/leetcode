/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let position = 0,
    dummyNode = new ListNode(0, head),
    currentNode = dummyNode,
    start = head,
    tail = null;

  while (position < left) {
    start = currentNode;
    currentNode = currentNode.next;
    position++;
  }

  let newList = null;
  tail = currentNode;

  while (position >= left && position <= right) {
    let next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    position++;
  }

  start.next = newList;
  tail.next = currentNode;

  return dummyNode.next;
};
