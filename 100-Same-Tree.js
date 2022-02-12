/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function dfs(left, right) {
    if (left === null && right === null) {
      return true;
    }

    if (left === null || right === null || left.val !== right.val) {
      return false;
    }

    return dfs(left.left, right.left) && dfs(left.right, right.right);
  }

  return dfs(p, q);
};
