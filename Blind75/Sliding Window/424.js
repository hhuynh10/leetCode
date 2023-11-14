// Longest Repeating Character Replacement
function characterReplacement(s, k) {
  let count = {};
  let res = 0;
  let maxCount = 0;

  let l = 0;
  for (let r = 0; r < s.length; r++) {
    count[s[r]] = 1 + (count[s[r]] || 0);
    maxCount = Math.max(maxCount, count[s[r]]);

    while (r - l + 1 - maxCount > k) {
      count[s[l]]--;
      l++;
    }
    res = Math.max(res, r - l + 1);
  }

  return res;
}

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
