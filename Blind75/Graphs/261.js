// Graph Valid Tree
function validTree(n, edges) {
  if (n === 0) {
    return true;
  }

  let adj = new Array(n).fill().map(() => []);
  for (let [e1, e2] of edges) {
    adj[e1].push(e2);
    adj[e2].push(e1);
  }

  let visit = new Set();
  function dfs(i, prev) {
    if (visit.has(i)) {
      return false;
    }

    visit.add(i);
    for (let j of adj[i]) {
      if (j === prev) {
        continue;
      }
      if (!dfs(j, i)) {
        return false;
      }
    }
    return true;
  }

  return dfs(0, -1) && n === visit.size;
}

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
);
