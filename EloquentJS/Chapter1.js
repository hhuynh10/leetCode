// 1
let length = 8
let str = ""
for (let i = 0; i < length; i++){
    str += "#"
    console.log(str)
}

// 2
for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    } else if (i % 5 == 0){
        console.log("Buzz")
    } else if (i % 3 == 0){
        console.log("Fizz")
    } else {
        console.log(i)
    }
}

// 3
let size = 8
let string = ""
for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
        if ((i + j) % 2 == 0){
            string += " "
        }else {
            string += "#"
        }
    }
    string += "\n"
}
console.log(string)