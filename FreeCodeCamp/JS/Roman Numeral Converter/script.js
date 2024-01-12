const input = document.querySelector("#number");
const button = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

const intToRoman = (num) => {
  const symbolList = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";
  for (let [symbol, value] of symbolList) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};

const converter = () => {
  output.classList.remove("hide", "safe", "danger");

  if (input.value === "") {
    output.classList.add("danger");
    output.innerHTML = "Please enter a valid number";
  } else if (input.value < 1) {
    output.classList.add("danger");
    output.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (input.value >= 4000) {
    output.classList.add("danger");
    output.innerHTML = "Please enter a number less than or equal to 3999";
  } else {
    const result = intToRoman(input.value);
    output.classList.add("safe");
    output.innerHTML = result;
  }
};

button.addEventListener("click", converter);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    converter();
  }
});
