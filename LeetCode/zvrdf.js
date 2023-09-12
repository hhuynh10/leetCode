var removeDuplicates = function(nums) {
    if (nums.length == 0) return
    let k = 1
    for (let i = 1; i < nums.length; i++){
        if (nums[i] != nums[i-1]){
            nums[k] = nums[i]
            k++
        }
    }
    console.log(nums)
    return k
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

var removeElement = function(nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != val){
            nums[k] = nums[i]
            k++
        }
    }
    console.log(nums)
    return k
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))

function getConcatenation(nums){
    let ans = []
    for (let i = 0; i < nums.length*2; i++){
        ans.push(nums[i % nums.length])
    }
    return ans
}

console.log(getConcatenation([1,2,1]))

function reverse(nums){
    let newArr = []
    for (let i = 0, j = nums.length-1; i < nums.length; i++, j--){
        newArr[i] = nums[j]
    }
    return newArr
}

console.log(reverse([2,3,4,5]))

function reverse1(nums){
    let l = 0
    let r = nums.length-1
    while (l < r){
        let temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp
        l++
        r--
    }
    return nums
}
console.log(reverse1([2,3,4,5]))

function calPoints(operations) {
    let newArr = []
    let x = 0
    for (let i = 0; i < operations.length; i ++){
        if (operations[i] == '+'){
            newArr.push(newArr[newArr.length-1] + newArr[newArr.length-2])
        }
        else if (operations[i] == 'D'){
            newArr.push(newArr[newArr.length-1] * 2)
        }
        else if (operations[i] == 'C'){
            newArr.pop()
        }
        else{
            newArr.push(parseInt(operations[i]))
        }
    }

    for (let j = 0; j < newArr.length; j++){
        x += newArr[j]
    }
    return x
}

console.log(calPoints(["5","2","C","D","+"]))

function isValid(string){
    let stack = []
    let hashMap = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    for( let char of string){
        if (hashMap[char]){
            stack.push(hashMap[char])
        }
        else if (stack.length > 0 && stack[stack.length-1] == char){
            stack.pop()
        }
        else {
            return false
        }
    }
    return stack.length == 0
}

console.log(isValid("(]"))


function factorial(num){
    if (num <= 0){
        return 1
    }
    return num * factorial(num-1)
}

console.log(factorial(5))

function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length - i; j++){
            if (nums[j + 1] < nums[j]){
                [nums[j + 1] , nums[j]] = [nums[j] , nums[j + 1]]
            }
        }
    }
    return nums
}

console.log(bubbleSort([5,1,1,2,0,0]))

function selectionSort(nums){
    for (let i = 0; i < nums.length; i++){
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] < nums[minIndex]){
                minIndex = j
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
    return nums
}
console.log(selectionSort([5,1,1,2,0,0]))

function insertionSort(nums){
    for (let i = 1; i < nums.length; i++){
        let j = i - 1
        while (j >= 0 && nums[j+1] < nums[j]){
            [nums[j+1], nums[j]] = [nums[j], nums[j+1]]
            j--
        }
    }
    return nums
}
console.log(insertionSort([5,1,1,2,0,0]))

function quickSort(nums){
    if (nums.length <= 1){
        return nums
    }

    const pivot = nums[nums.length-1]
    const leftNums = []
    const rightNums = []

    for (let i = 0; i < nums.length-1; i++){
        if (nums[i] <= pivot){
            leftNums.push(nums[i])
        } else {
            rightNums.push(nums[i])
        }
    }

    if (leftNums.length > 0 && rightNums.length > 0){
        return [...quickSort(leftNums), pivot, ...quickSort(rightNums)]
    } else if (leftNums.length > 0){
        return [...quickSort(leftNums), pivot]
    } else {
        return [pivot, ...quickSort(rightNums)]
    }
}

console.log(quickSort([5,1,1,2,0,0]))

function mergeSort(nums){
    if (nums.length <= 1){
        return nums
    }

    const mid = Math.floor(nums.length / 2)
    const leftNums = nums.slice(0, mid)
    const rightNums = nums.slice(mid)

    return merge(
        mergeSort(leftNums),
        mergeSort(rightNums)
    )
}

function merge(leftNums, rightNums){
    const output =  []
    let leftIndex = 0 
    let rightIndex = 0

    while (leftIndex < leftNums.length && rightIndex < rightNums.length){
        const leftElement = leftNums[leftIndex]
        const rightElement = rightNums[rightIndex]  

        if (leftElement < rightElement) {
            output.push(leftElement)
            leftIndex++
        } else{
            output.push(rightElement)
            rightIndex++
        }
    }

    return [...output, ...leftNums.slice(leftIndex), ...rightNums.slice(rightIndex)]
}

console.log(mergeSort([5,1,1,2,0,0]))

function bucketSort(nums){
    let l = 0
    let r = nums.length-1
    let i = 0

    function swap(i, j){
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    while (i <= r){
        if (nums[i] == 0){
            swap(l, i)
            l++
        } else if (nums[i] == 2){
            swap(i, r)
            r--
            i--
        }
        i++
    }
    return nums
}

console.log(bucketSort([2,1,1,2,0,0]))

function binarySearch(nums, target){
    let l = 0
    let r = nums.length-1

    while (l <= r){
        let mid = Math.floor((l + r) / 2)

        if (target > nums[mid]){
            l = mid + 1
        } else if (target < nums[mid]){
            r = mid -1
        }
        else {
            return mid
        }
    }
    return false
}
console.log(binarySearch([-1,0,3,5,9,12], 9))

function searchMatrix(matrix, target) {
    const rows  = matrix.length
    const columns = matrix[0].length

    let top = 0
    let bottom = rows - 1

    while (top <= bottom){
        let row = Math.floor((top + bottom) / 2)
        if (target > matrix[row][columns - 1]){
            top = row + 1
        } else if (target < matrix[row][0]){
            bottom = row - 1
        } else {
            break
        }
    }

    if (!(top <= bottom)){
        return false
    }

    let row = Math.floor((top + bottom) / 2)
    let left = 0
    let right = columns - 1

    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if (target > matrix[row][mid]){
            left = mid + 1
        } else if (target < matrix[row][mid]){
            right = mid - 1
        } else {
            return true
        }
    }
    return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 9))