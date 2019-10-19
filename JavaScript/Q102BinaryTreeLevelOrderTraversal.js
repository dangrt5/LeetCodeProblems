// NOT DONE
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
  // const levelStack = [];
  const result = [];
  let curNode = root;
  // console.log("head: " + head.val)
  // console.log("head.left: " + head.left.val)
  let level = 0;
  
  while (curNode !== null || nodeStack.length > 0) {
    // console.log(nodeStack.map(el => el.val));
    while (curNode !== null) {
      // console.log("head: " + head.val)
      console.log("curNode.val: " + curNode.val + " level: " + level);
      nodeStack.push(curNode);
      if (Array.isArray(result[level])) {
        result[level].push(curNode.val);
      } else {
        result[level] = [curNode.val];
      }

      curNode = curNode.left;
      // if (curNode !== null) level += 1;
      level += 1;
    }

    curNode = nodeStack.pop()
    console.log("popping: " + curNode.val)
    // console.log("nodeStack.length: " + nodeStack.length)
    // level -= 1;
    // level = nodeStack.length
    curNode = curNode.right;
    if (curNode !== null) level += 1;
    // else level -= 1
  }
  
  return result;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// [3,9,20,null,null,15,7]

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.left.right = new TreeNode(22);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);


    //       3
    //   /       \
    // 9          20
    //   \      /    \
    //   22    15      7

console.log(levelOrder(root));