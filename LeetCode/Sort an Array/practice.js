// Insertion sort
function sortArray(nums){
    for (let i = 1; i < nums.length; i++){
        let j = i - 1
        while(j >= 0 && nums[j + 1] < nums[j]){
            temp = nums[j + 1]
            nums[j + 1] = nums[j]
            nums[j] = temp
            j--
        }
    }
    return nums
}

console.log(sortArray([5,2,3,1]))