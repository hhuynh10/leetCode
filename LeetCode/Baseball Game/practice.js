function calPoints(operations){
    let newOperations = []
    let x = 0
    for (let i = 0; i < operations.length; i ++){
        if (operations[i] == "+"){
            newOperations.push(newOperations[newOperations.length - 1] + newOperations[newOperations.length - 2])
        }
        else if (operations[i] == "D"){
            newOperations.push(newOperations[newOperations.length - 1] * 2)
        }
        else if (operations[i] == "C") {
            newOperations.pop()
        }
        else {
            newOperations.push(parseInt(operations[i]))
        }
    }
    console.log(newOperations)
    for (let j = 0; j < newOperations.length; j++){
        x += newOperations[j]
    }
    return x
}

console.log(calPoints(["5","2","C","D","+"]))