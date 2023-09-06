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