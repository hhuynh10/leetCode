const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

function bfs(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const queue = [];
  const visit = new Set();
  queue.push([0, 0]);
  visit.add("0,0");

  let length = 0;
  while (queue.length > 0) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const [r, c] = queue.shift();
      if (r === ROWS - 1 && c === COLS - 1) {
        return length;
      }

      const neighbors = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];
      for (const [dr, dc] of neighbors) {
        if (
          r + dr < 0 ||
          c + dc < 0 ||
          r + dr === ROWS ||
          c + dc === COLS ||
          visit.has(`${r + dr},${c + dc}`) ||
          grid[r + dr][c + dc] === 1
        ) {
          continue;
        }
        queue.push([r + dr, c + dc]);
        visit.add(`${r + dr},${c + dc}`);
      }
    }
    length++;
  }
}

console.log(bfs(grid));
