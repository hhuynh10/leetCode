function removeDuplicates(nums){
    let k = 1
    for (let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[i-1]){
            nums[k] = nums[i]
            k++
        }
    }
    console.log("k: " + k + " " + "Array: " + nums)
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4])

function removeDuplicates1(nums){
    let arr = []
    for (let i = 0; i <nums.length; i ++){
        if (nums[i] != nums[i+1]){
            arr.push(nums[i])
        }
    }
    return arr
}

console.log(removeDuplicates1([0,0,1,1,1,2,2,3,3,4]))