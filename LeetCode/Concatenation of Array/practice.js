function getConcatenation(nums){
    let ans = []
    for (let i = 0; i < nums.length; i ++){
        ans.push(nums[i])
    }
    ans = ans.concat(nums)
    return ans
}

console.log(getConcatenation([1,2,1]))

function getConcatenation1(nums, x){
    let ans = []
    for (let i = 0; i < nums.length*x; i++){
        ans.push(nums[i % nums.length])
    }
    return ans
}

console.log(getConcatenation1([1,2,1], 4))