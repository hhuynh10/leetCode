// Number of Islands
function numIslandsDFS(grid) {
  if (!grid) {
    return 0;
  }

  let rows = grid.length;
  let cols = grid[0].length;
  let visit = new Set();
  let islands = 0;

  function dfs(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      grid[r][c] === "0" ||
      visit.has(`${r}, ${c}`)
    ) {
      return 0;
    }

    visit.add(`${r}, ${c}`);
    let area =
      1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);

    return area;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && !visit.has(`${r}, ${c}`)) {
        dfs(r, c);
        islands++;
      }
    }
  }

  return islands;
}

console.log(
  numIslandsDFS([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
console.log(
  numIslandsDFS([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);

function numIslandsBFS(grid) {
  if (!grid) {
    return 0;
  }

  let rows = grid.length;
  let cols = grid[0].length;
  let visit = new Set();
  let islands = 0;

  function bfs(r, c) {
    let queue = [];
    queue.push([r, c]);
    visit.add(`${r}, ${c}`);

    while (queue.length > 0) {
      let length = queue.length;
      for (i = 0; i < length; i++) {
        let [row, col] = queue.shift();
        let directions = [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ];

        for (let [dr, dc] of directions) {
          if (
            row + dr < 0 ||
            col + dc < 0 ||
            row + dr >= rows ||
            col + dc >= cols ||
            grid[row + dr][col + dc] === "0" ||
            visit.has(`${row + dr}, ${col + dc}`)
          ) {
            continue;
          }

          queue.push([row + dr, col + dc]);
          visit.add(`${row + dr}, ${col + dc}`);
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && !visit.has(`${r}, ${c}`)) {
        bfs(r, c);
        islands++;
      }
    }
  }

  return islands;
}

console.log(
  numIslandsBFS([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
console.log(
  numIslandsBFS([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
