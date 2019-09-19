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
// RECURSION METHOD
const inorderTraversal = root => {
  const inOrder = [];
  traverse(root, inOrder);
  return inOrder
};

const traverse = (node, results) => {
  if (!node) return;
  traverse(node.left, results);
  results.push(node.val);
  traverse(node.right, results);  
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// ITERATIVE METHOD
const inorderTraversal = root => {
  const inOrder = [];
  if (!root) return inOrder;
  
  const nodeStack = [];
  let curNode = root;
  
  while (curNode !== null || nodeStack.length > 0) {
    while (curNode !== null) {
      nodeStack.push(curNode);
      curNode = curNode.left;
    }
    curNode = nodeStack.pop()
    inOrder.push(curNode.val)    
    curNode = curNode.right;
  }
         
  return inOrder
};
