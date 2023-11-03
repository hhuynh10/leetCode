// Two Sum
function twoSum(nums, target) {
   let map = new Map()

   for (let index = 0; index < nums.length; index++){
    let num = nums[index]
    let secondNum = target - num
    let secondNumIndex = map.get(secondNum)

    if (map.has(secondNum)){
        return [secondNumIndex, index]
    }

    map.set(num, index)
   }

   return false
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))