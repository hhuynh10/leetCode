function calPoints(operations){
    let newArr = []
    let x = 0
    for (let i = 0; i < operations.length; i ++){
        if (operations[i] == "+"){
            newArr.push(newArr[newArr.length - 1] + newArr[newArr.length - 2])
        }
        else if (operations[i] == "D"){
            newArr.push(newArr[newArr.length - 1] * 2)
        }
        else if (operations[i] == "C") {
            newArr.pop()
        }
        else {
            newArr.push(parseInt(operations[i]))
        }
    }
    console.log(newArr)
    for (let j = 0; j < newArr.length; j++){
        x += newArr[j]
    }
    return x
}

console.log(calPoints(["5","2","C","D","+"]))