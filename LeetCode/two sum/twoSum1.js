function twoSum(arr, target){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target){
                console.log([i, j])
                return [i, j]
            }
        }
    }
}
twoSum([2,7,11,15, 5, 16, 1], 6)