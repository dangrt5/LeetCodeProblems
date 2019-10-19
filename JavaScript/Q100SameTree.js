/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 // Time - O(n) | Space - O(n)
var isSameTree = function(p, q) {
  return traverse(p, q);
};

const traverse = (pNode, qNode) => {
  if (pNode === null && qNode === null) return true;
  if (pNode === null || qNode === null) return false;
  if (pNode.val !== qNode.val) return false;
  
  return traverse(pNode.left, qNode.left) && traverse(pNode.right, qNode.right);
}

// preorder = root/left/right

