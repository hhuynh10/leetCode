// Bubble sort
function bubbleSort(nums){
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = 0; j < nums.length - 1 - i; j++){
            if (nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                // let temp = nums[j]
                // nums[j] = nums[j+1]
                // nums[j+1] = temp
            }
        }
    }
    return nums
}

console.log(bubbleSort([5,2,3,1]))

// Selection sort
function selectionSort(nums){
    for (let i = 0; i < nums.length - 1; i++){
        let minIndex = i
        for (let j = i+1; j < nums.length; j++){
            if (nums[j] < nums[minIndex]){
                minIndex = j
            }
        }
        let temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
    return nums
}

console.log(selectionSort([5,2,3,1]))

// Insertion sort
function sortArray(nums){
    for (let i = 1; i < nums.length; i++){
        let j = i - 1
        while(j >= 0 && nums[j+1] < nums[j]){
            let temp = nums[j+1]
            nums[j+1] = nums[j]
            nums[j] = temp
            j--
        }
    }
    return nums
}

console.log(sortArray([5,2,3,1]))

// Quick sort
function quickSort(nums){
    if (nums.length === 1){
        return nums
    }

    const pivot = nums[nums.length-1]
    const leftNums = []
    const rightNums = []

    for (let i = 0; i < nums.length -1; i++){
        if (nums[i] < pivot){
            leftNums.push(nums[i])
        } else {
            rightNums.push(nums[i])
        }
    }

    if (leftNums.length > 0 && rightNums.length > 0){
        return [...quickSort(leftNums), pivot, ...quickSort(rightNums)]
    } else if (leftNums.length > 0) {
        return [...quickSort(leftNums), pivot]
    } else {
        return [pivot, ...quickSort(rightNums)]
    }
}

console.log(quickSort([5,2,3,1]))

// Merge sort
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
    const output = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftNums.length && rightIndex < rightNums.length){
        const leftElement = leftNums[leftIndex]
        const rightElement = rightNums[rightIndex]

        if(leftElement < rightElement){
            output.push(leftElement)
            leftIndex++
        } else {
            output.push(rightElement)
            rightIndex++
        }
    }
    return [...output, ...leftNums.slice(leftIndex), ...rightNums.slice(rightIndex)]
}

console.log(mergeSort([5,2,3,1]))