/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Time - O(n) | Space - O(1)
const removeNthFromEnd = (head, n) => {
  if (!head) return head;

  let curNode = head;
  let nthAwayNode = head;
  let nthAwayNodePrev = head;
  
  let idx = 0;
  while (curNode) {
    curNode = curNode.next;
    idx += 1;
    if (idx > n) nthAwayNode = nthAwayNode.next;
    if (idx > n+1) nthAwayNodePrev = nthAwayNodePrev.next;
  }
  
  if (idx > n) {
    nthAwayNodePrev.next = nthAwayNode.next
  } else {
    head = nthAwayNode.next;
  }
  
  return head;
};

// Time - O(n) | Space - O(n)
// const removeNthFromEnd = (head, n) => {
//   if (!head) return head;
  
//   const nodeArr = [];
//   let curNode = head;
  
//   while (curNode) {
//     nodeArr.push(curNode);
//     curNode = curNode.next;
//   }
  
//   const nthFromEnd = nodeArr.length - n;
//   if (nthFromEnd === 0) {
//     head = nodeArr[nthFromEnd+1] ? nodeArr[nthFromEnd+1] : null
//   } else {
//     nodeArr[nthFromEnd-1].next = nodeArr[nthFromEnd+1]  
//   }
  
//   return head;
// };
