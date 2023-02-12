function search(nums, target){
    let left = 0
    let right = nums.length - 1

    while (left <= right){
        mid = Math.trunc((left + right) / 2)

        if(target > nums[mid]){
            left = mid + 1
        } else if (target < nums[mid]){
            right = mid - 1
        } else {
            return mid
        }
    }
    return "Number doesn't exist"
}

console.log(search([-1,0,3,5,9,12], 2))
