function longestCommonPrefix(arr){
    let str = ""
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] == arr[i+1][j]){
                str += arr[i][j]
            }
            console.log(str)
        }
    }
}

longestCommonPrefix(["flower","flow","flight"])