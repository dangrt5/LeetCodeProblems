/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
  const nodeStack = [];
  const levelStack = [];
  const results = [];
  let head = root;
  console.log("head: " + head.val)
  let level = 0;
  
  while (true) {
    while (!head) {
      console.log("head: " + head.val)
      nodeStack.push(head);
      levelStack.push(level);
      head = head.left;
      level += 1;
    }
  
    head = nodeStack.pop()
    level = levelStack.pop();
    results[level] = [level];
    
    console.log("head: " + head)
    console.log("level: " + level)
    
    if (nodeStack.length === 0) {
      break;
    }
  
  // idx = 0;
  // while (!head) {
  //   head = head.right;
  //   idx += 1;
  // } 
  }
  
  return results;
};