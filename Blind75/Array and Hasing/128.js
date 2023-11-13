// Longest Consecutive Sequence
function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;


    for (const num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let length = 1;
            while (numSet.has(num + length)) {
                length++;
            }
            longest = Math.max(length, longest);
        }
    }
    return longest;
}

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
    