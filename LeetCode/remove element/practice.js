function removeElement(nums, val){
    let k = 0;
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] != val){
            nums[k] = nums[i]
            k++
        }
    }
    console.log(nums)
    return k
}

removeElement([0,1,2,2,3,0,4,2], 2)

function removeElement1(nums, val){
    let arr = []
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] != val){
            arr.push(nums[i])
        }
    }
    return arr
}

console.log(removeElement1([0,1,2,2,3,0,4,2], 2))