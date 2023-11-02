function dfs(r, c, rows, cols){
    if (r === rows || c === cols){
        return 0
    }
    
    if (r === rows - 1 && c === cols - 1){
        return 1
    }

    return (dfs(r + 1, c, rows, cols) + dfs(r, c + 1, rows, cols))
}

console.log(dfs(0, 0, 3, 7))

function bottomUp(rows, cols){
    let prevRow = new Array(cols).fill(0)
    for (let i = rows - 1; i >= 0; i --){
        let curRow = new Array(cols).fill(0)
        curRow[cols - 1] = 1
        for (let j = cols - 2; j >= 0; j--){
            curRow[j] = curRow[j + 1] + prevRow[j]
        }
        prevRow = curRow
    }
    return prevRow[0]
}

console.log(bottomUp(4, 4))