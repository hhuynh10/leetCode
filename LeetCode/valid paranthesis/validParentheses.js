function isValid(s){
    for (let i = 0; i < s.length; i++){
        for (let j = i + 1; j < s.length; j++){
            if (s[i] == "(" && s[j] == ")"){
                return true
            }
            if (s[i] == "{" && s[j] == "}"){
                return true
            }
            if (s[i] == "[" && s[j] == "]"){
                return true
            }
            return false
        }
    }
}

console.log(isValid("{[]}"))