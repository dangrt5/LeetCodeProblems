/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Time - O(N) | Space - O(1)
const hasCycle = head => {
  if (head === null) return false;
  
  let tortoise = head;
  let hare = head.next;
  
  while (tortoise !== null && hare !== null && hare.next !== null) {
    if (tortoise.val === hare.val) return true;
    tortoise = tortoise.next;
    hare = hare.next.next;
  }
  return false
};

