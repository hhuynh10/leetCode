def calPoints(operations):
    stack = []
    sum = 0
    for i in range(len(operations)):
        if operations[i] == "+":
            stack.append(stack[-1] + stack[-2])
        elif operations[i] == "D":
            stack.append(stack[-1] * 2)
        elif (operations[i] == "C"):
            stack.pop()
        else:
            stack.append(int(operations[i]))
    print(stack)
    for num in stack:
        sum = sum + num
    return sum

calPoints(["5","2","C","D","+"])