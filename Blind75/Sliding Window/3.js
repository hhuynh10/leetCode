//Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let longest = 0
    
    let l = 0
    for (let r = 0; r < s.length; r++){
        while (set.has(s[r])){
            set.delete(s[l])
            l++
        }

        set.add(s[r])
        longest = Math.max(longest, r - l + 1)
    }
    return longest
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))