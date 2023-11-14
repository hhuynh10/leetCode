// Valid Parentheses
var isValid = function (s) {
  let stack = [];
  let hashMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char in hashMap) {
      if (stack.length && stack[stack.length - 1] === hashMap[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return !stack.length;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
