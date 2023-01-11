// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(arr, target) {
    const previousValues = {}
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i]
        const neededValue = target - currentValue
        if (previousValues[neededValue] != null) {
            return [previousValues[neededValue], i]
        } else {
            previousValues[currentValue] = i
        }
    }
    return []
}
console.log(twoSum([3,8,7,11,15,2], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([3,3], 6))
console.log([2,3], 6)
