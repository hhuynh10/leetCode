function searchMatrix(matrix, target){
    for (let i = 0; i < matrix.length; i ++){
        for (let j = 0; j < matrix[i].length; j ++){
            if (target === matrix[i][j]){
                return true
            }
        }
    }
    return false
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 30))

function searchMatrix1(matrix, target){
    let [rows, cols] = [matrix.length, matrix[0].length]

    let [top, bot] = [0, rows - 1]

    while (top <= bot){
        let row = Math.trunc((top + bot) / 2)
        if (target > matrix[row][cols-1]){
            top = row + 1
        } else if (target < matrix[row][0]){
            bot = row - 1
        } else {
            break
        }
    }

    if (!(top <= bot)){
        return false
    }
    let row = Math.trunc((top + bot) / 2)

    let [left, right] = [0, cols - 1]
    while (left <= right){
        let mid = Math.trunc((left + right) / 2)
        if (target > matrix[row][mid]){
            left = mid + 1
        } else if (target < matrix[row][mid]){
            right = mid - 1
        }else if(target == matrix[row][mid]){
            return true
        }
    }
    return false
}

console.log(searchMatrix1([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 30))