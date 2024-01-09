const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const isValid = (char) => {
  return char.match(/[^a-z0-9]/gi);
};

const checker = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while (left < right && isValid(str[left])) {
      left++;
    }
    while (left < right && isValid(str[right])) {
      right--;
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const checkInput = () => {
  if (input.value === "") {
    alert("Please input a value");
  }
  const isPalindrome = checker(input.value);
  result.classList.remove("hide");
  result.classList.toggle("true-style", isPalindrome);
  result.classList.toggle("false-style", !isPalindrome);
  result.innerHTML = isPalindrome
    ? `<strong>${input.value}</strong> is a palindrome!`
    : `<strong>${input.value}</strong> is not a palindrome!`;

  input.value = "";
};

button.addEventListener("click", checkInput);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});
