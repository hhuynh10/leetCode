def sortColors(nums):
    left = 0
    right = len(nums) - 1
    i = 0

    def swap(i, j):
        temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    
    while i < right:
        if nums[i] == 0:
            swap(left, i)
            left += 1
        if nums[i] == 2:
            swap(i, right)
            i -= 1
        i += 1

    return nums

print(sortColors([2,0,1]))