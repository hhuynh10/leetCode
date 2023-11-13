// Group Anagrams
function groupAnagrams(strs) {
  const ans = new Map();

  for (const s of strs) {
    const count = new Array(26).fill(0);
    for (const c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
      console.log(c);
    }

    const key = count.join(",");
    console.log(key);

    if (!ans.has(key)) {
      ans.set(key, []);
    }
    ans.get(key).push(s);
  }
  console.log(ans);

  return Array.from(ans.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
