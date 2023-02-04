def isValid(s):
    hashMap = { 
                        "(" : ")",
                        "[" : "]",
                        "{" : "}" 
                    }
    stack = []
    for ch in s:
        if ch in hashMap:
            stack.append(ch)
        else:
            if not stack:
                return False
            opening = stack.pop()
            if ch != hashMap[opening]:
                return False
    
    return True if not stack else False

print(isValid("{[]}")) 