/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = slow.next;

  slow.next = null;
  let prevNode = null;

  // reverse second half
  while (secondHalf) {
    let temp = secondHalf.next;
    secondHalf.next = prevNode;
    prevNode = secondHalf;
    secondHalf = temp;
  }

  // merge both linked lists

  second = prevNode;
  first = head;

  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
};
