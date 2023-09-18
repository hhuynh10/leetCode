// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
    let map = new Map()

    for (let index = 0; index < nums.length; index++){
        let num = nums[index]
        let secondNum = target - num
        let secondNumIndex = map.get(secondNum)
        
        if (map.has(secondNum)){
            return [index, secondNumIndex]
        }

        map.set(num, index)
    }
    return false
}
console.log(twoSum([3,8,7,11,15,2], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([3,3], 6))
console.log(twoSum([2,3], 6))


function twoSum1(arr, target){
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