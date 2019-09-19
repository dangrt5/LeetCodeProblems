/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = root => { 
  return isValid(root);
};

const isValid = (node, min = null, max = null) => {
  if (!node) return true;
  if (min !== null && node.val <= min) return false;
  if (max !== null && node.val >= max) return false;
  
  return isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
}