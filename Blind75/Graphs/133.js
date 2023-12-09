// Clone Graph
class Node {
  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors || [];
  }
}

function cloneGraph(node) {
  if (!node) {
    return null;
  }

  let oldToNew = new Map();

  function dfs(node) {
    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }

    let copy = new Node(node.val);
    oldToNew.set(node, copy);

    for (let neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  }

  return dfs(node);
}
