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