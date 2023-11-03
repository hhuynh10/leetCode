// Valid Anagram
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let countS = {};
  let countT = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = 1 + (countS[s[i]] || 0);
    countT[t[i]] = 1 + (countT[t[i]] || 0);

    console.log(s[i], countS[s[i]]);
  }

  for (let count in countS) {
    if (countS[count] !== countT[count]) {
      return false;
    }
  }

  console.log(countS);

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
