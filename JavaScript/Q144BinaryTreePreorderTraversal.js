/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Time - O(n) | Space - O(n)
const preorderTraversal = root => {
  const result = [];
  if (root === null) return result;
  
  const stack = [root];
  
  while (stack.length !== 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right !== null) stack.push(current.right)
    if (current.left !== null) stack.push(current.left)
  }
  
  return result;
};

// Time - O(n) | Space - O(n)
// const preorderTraversal = (root, result = []) => {
//   if (root === null) return result;
//   result.push(root.val);
//   preorderTraversal(root.left, result)
//   preorderTraversal(root.right, result)
//   return result;
// };
