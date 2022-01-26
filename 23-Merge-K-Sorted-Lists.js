/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function mergeTwoLists(l1, l2) {
    const dummyNode = { val: 0, next: "" };
    let tail = dummyNode;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }

    if (l1) {
      tail.next = l1;
    } else if (l2) {
      tail.next = l2;
    }

    return dummyNode.next;
  }

  function divideAndMergeLists(lists, start, end) {
    if (start >= end) {
      return lists[end];
    }

    const midPoint = start + Math.floor((end - start) / 2);
    const leftList = divideAndMergeLists(lists, start, midPoint);
    const rightList = divideAndMergeLists(lists, midPoint + 1, end);

    return mergeTwoLists(leftList, rightList);
  }

  if (lists.length === 0) {
    return null;
  }

  return divideAndMergeLists(lists, 0, lists.length - 1);
};

console.log(mergeKLists([1, 4, 5], [1, 3, 4], [2, 6]));
