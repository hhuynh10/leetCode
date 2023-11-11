// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  let testStr = "";
  let length = target.length;

  let start = str.length - length;
  for (start; start < str.length; start++) {
    testStr += str[start];
  }

  return testStr === target;
}

confirmEnding("Bastian", "n");

function confirmEnding1(str, target) {
  let testStr = str.substring(str.length - target.length);

  return testStr === target;
}

confirmEnding("Bastian", "n");
