// Climbing Stairs
function climbStairs(n, cache = {}) {
  if (n <= 2) {
    return n;
  }
  if (n in cache) {
    return cache[n];
  }

  cache[n] = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);
  return cache[n];
}

console.log(climbStairs(5))
