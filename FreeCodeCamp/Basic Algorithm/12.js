// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let newArr = str.split(" ");

  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i][0].toUpperCase() + newArr[i].toLowerCase().slice(1);
  }

  console.log(newArr);
  return newArr.join(" ");
}

titleCase("I'm a little tea pot");
