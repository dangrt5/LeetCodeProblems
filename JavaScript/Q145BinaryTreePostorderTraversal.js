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
const postorderTraversal = root => {
  return traverse(root);
};

const traverse = (node, results = []) => {
  
  if (node === null) return results
  console.log(node.val)
  
  traverse(node.left, results)
  traverse(node.right, results)
  results.push(node.val)
  return results;
}

// Left, Right, Root