// Pacific Atlantic Water Flow
function pacificAtlantic(heights) {
  let rows = heights.length;
  let cols = heights[0].length;
  let pac = new Set();
  let atl = new Set();

  function dfs(r, c, visit, prevHeight) {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      visit.has(`${r},${c}`) ||
      heights[r][c] < prevHeight
    ) {
      return;
    }

    visit.add(`${r},${c}`);
    dfs(r + 1, c, visit, heights[r][c]);
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  }

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(rows - 1, c, atl, heights[rows - 1][c]);
  }
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols - 1]);
  }

  let res = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) {
        res.push([r, c]);
      }
    }
  }
  return res;
}

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
