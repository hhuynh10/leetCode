const input = document.getElementById("user-input");
const buttonCheck = document.getElementById("check-btn");
const buttonClear = document.getElementById("clear-btn");
const output = document.getElementById("results-div");
const resultArr = [];

const check = (str) => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  return str.match(regex);
};

const validator = () => {
  if (input.value === "") {
    alert("Please provide a phone number");
    return;
  }

  const isValid = check(input.value);
  resultArr.push(isValid);
  output.classList.remove("hide");

  output.innerHTML += isValid
    ? `<p>Valid US number: ${input.value}</p>`
    : `<p>Invalid US number: ${input.value}</p>`;

  input.value = "";
};

const reset = () => {
  output.classList.add("hide");
  resultArr.length = 0;
  output.innerHTML = "";
};

buttonCheck.addEventListener("click", validator);
buttonClear.addEventListener("click", reset);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validator();
  }
});
