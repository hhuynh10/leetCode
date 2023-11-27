// Encode and decode strings
function encode(strs) {
  let res = "";
  for (let s of strs) {
    res += s.length + "#" + s;
  }
  return res;
}

function decode(str) {
  const res = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    const length = parseInt(str.slice(i, j));
    res.push(str.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }

  return res;
}

console.log(encode(["neet", "co#de"]));
console.log(decode(encode(["neet", "co#de"])));
