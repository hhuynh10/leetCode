function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(2, 9))


function convertToInteger(str) {
  return parseInt(str, 2)
}

console.log(convertToInteger("10011"));