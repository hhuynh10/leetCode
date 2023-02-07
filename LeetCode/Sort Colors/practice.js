function sortColors(nums){
    let left = 0
    let right = nums.length-1
    let i = 0

    function swap(i, j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    while (i <= right) {
        if (nums[i] == 0){
            swap(left, i)
            left++
        } else if (nums[i] == 2){
            swap(i, right)
            right--
            i--
        }
        i++
    }
    return nums
}

console.log(sortColors([2,0,1]))