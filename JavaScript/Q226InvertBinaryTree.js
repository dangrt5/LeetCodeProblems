/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Time - O(n) | Space - O(n)
const invertTree = root => {
  const stack = [root]
  const node = root;
  
  while (stack.length) {
    const node = stack.pop();
    if (node !== null) {
      stack.push(node.left);
      stack.push(node.right); 
      const temp = node.left
      node.left = node.right;
      node.right = temp;
    }   
  }
  return root;
}

// Time - O(n) | Space - O(n)
// const invertTree = root => {
//   const node = root;
//   if (node !== null) {
//     const temp = node.left;
//     node.left = invertTree(node.right)
//     node.right = invertTree(temp)
//   }
//   return root;
// };