/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

var cloneGraph = function (root) {
  const copy = new Map();

  function dfs(node) {
    if (!node) {
      return null;
    }

    if (copy.has(node)) {
      return copy.get(node);
    }

    let copiedNode = new Node(node.val);
    copy.set(node, copiedNode);

    for (let n of node.neighbors) {
      copiedNode.neighbors.push(dfs(n));
    }

    return copiedNode;
  }

  return dfs(root);
};
