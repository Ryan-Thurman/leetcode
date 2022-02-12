/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length >= 1) {
    let queueLength = queue.length;
    let level = [];

    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left, node.right);
      }
    }
    if (level.length > 0) {
      result.push(level);
    }
  }

  return result;
};
