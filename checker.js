function checker(str) {
  function isValid(char) {
    return char.match(/[^a-z0-9]/gi);
  }

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while (left < right && isValid(str[left])) {
      left++;
    }
    while (left < right && isValid(str[right])) {
      right--;
    }
    if (str[left].toLowerCase() === str[right].toLowerCase()) {
      return true;
    }
    left++;
    right--;
  }
  return false;
}

console.log(checker("My age is 0, 0 si ega ym"));
