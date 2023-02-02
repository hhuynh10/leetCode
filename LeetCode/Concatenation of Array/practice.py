def getConcatenation(nums):
    ans = []
    for i in range(len(nums)):
        ans.append(nums[i])
    ans = ans + nums
    return ans

print(getConcatenation([1,2,1]))