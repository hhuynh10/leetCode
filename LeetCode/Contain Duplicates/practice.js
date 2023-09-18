function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] === nums[j]){
                return true
            }
        }
    }
    return false
};

function containsDuplicate1(nums) {
    let numsSet = new Set()
    for (let num of nums){
        if (numsSet.has(num)){
            return true
        }
        numsSet.add(num)
    }
    return false
}