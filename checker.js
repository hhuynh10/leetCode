const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];

  if (input === 0) {
    result = "0";
    return;
  }

  while (input > 0) {
    const quotient = Math.floor(input / 16);
    const remainder = input % 16;

    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }

  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);

  return (result = remainders.reverse().join(""));
};

console.log(decimalToBinary(12375));

// const decimalToBinary1 = (input) => {
//   if (input === 0 || input === 1) {
//     return String(input);
//   } else {
//     return decimalToBinary1(Math.floor(input / 2)) + (input % 2);
//   }
// };

// console.log(decimalToBinary1(8))

