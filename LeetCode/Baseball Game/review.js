function calPoints(ops){
    let stack = []
    let point = 0

    for (let i = 0; i < ops.length; i ++){
        if (ops[i] == "+"){
            stack.push(stack[stack.length-1] + stack[stack.length-2])
        }else if(ops[i] == "D"){
            stack.push(stack[stack.length-1] * 2)
        } else if(ops[i] == "C"){
            stack.pop()
        }else {
            stack.push(parseInt(ops[i]))
        }
    }

    for (let j = 0; j < stack.length; j++){
        point += stack[j]
    }

    return point
}

console.log(calPoints(["5","2","C","D","+"]))