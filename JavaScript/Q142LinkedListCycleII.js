/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Time - O(N) | Space - O(1)
const detectCycle = head => {
  if (head === null) return null;
  
  let tortoise = head;
  let hare = head;
  
  do {
    if (!hare.next || !hare.next.next) return null;
    tortoise = tortoise.next;
    hare = hare.next.next
  } while (tortoise !== hare)
    
  tortoise = head;
  
  while (tortoise !== hare) {
    tortoise = tortoise.next;
    hare = hare.next;
  }
  
  return tortoise;  
};

// Time - O(N) | Space - O(N)
// const detectCycle = head => {
//   const visits = new Set();
//   let cur = head;
  
//   while (cur !== null && cur.next !== null) {
//     const key = 'val:' + cur.val + 'next:' + cur.next.val
//     if (visits.has(key)) return cur
//     visits.add(key)
//     cur = cur.next
//   }
//   return null
// };
