/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// My solution
class LinkNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (list1, list2) {
  let dummyHead = new LinkNode(0);
  let current = dummyHead;

  //   console.log(list1, list2);
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  }

  if (list2 !== null) {
    current.next = list2;
  }

  return dummyHead.next;
};

// list1.val >= list2.val;
let list1 = new LinkNode(1, new LinkNode(2, new LinkNode(4)));
let list2 = new LinkNode(1, new LinkNode(3, new LinkNode(4)));

let result = mergeTwoLists(list1, list2);
console.log({ result });
