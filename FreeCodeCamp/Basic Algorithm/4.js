// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let newStr = str.split(" ");
  let max = 0;

  for (let i = 0; i < newStr.length; i++) {
    max = Math.max(newStr[i].length, max);
  }

  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
