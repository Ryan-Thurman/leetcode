/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
  if (!inorder.length) return null;

  let node = preorder.shift();

  let root = new TreeNode(node);
  
  let mid = inorder.indexOf(node);

  root.left = buildTree(preorder, inorder.slice(0, mid));
  root.right = buildTree(preorder, inorder.slice(mid + 1));

  return root;
};
