function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))

function selecionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let minIndex = i
        for (let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    return arr
}

console.log(selecionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        let j = i - 1
        while (j >= 0 && arr[j+1] < arr[j]){
            let temp = arr[j+1]
            arr[j+1] = arr[j]
            arr[j] = temp
            j--
        }
    }
    return arr
}

console.log(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))

function quickSort(arr){
    if (arr.length === 1){
        return arr
    }

    let pivot = arr[arr.length-1]
    let leftArr = []
    let rightArr= []

    for (let i = 0; i < arr.length-1; i++){
        if (arr[i] < pivot){
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }

    if (leftArr.length > 0 && rightArr.length > 0){
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    } else if (leftArr.length > 0){
        return [...quickSort(leftArr), pivot]
    } else {
        return [pivot, ...quickSort(rightArr)]
    }
}

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))


function mergeSort(arr){
    if (arr.length <= 1){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    )
}

function merge(leftArr, rightArr){
    const output = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftArr.length && rightIndex < rightArr.length){
        const leftElement = leftArr[leftIndex]
        const rightElement = rightArr[rightIndex]

        if(leftElement < rightElement){
            output.push(leftElement)
            leftIndex++
        } else {
            output.push(rightElement)
            rightIndex++
        }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}


console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))