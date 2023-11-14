// Container With Most Water
function maxArea(height) {
  let res = 0;

  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);

    if (height[r] < height[l]) {
      r--;
    } else if (height[l] < height[r]) {
      l++;
    } else {
      l++;
    }
  }

  return res;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
