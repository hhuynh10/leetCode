// Palindromic Substrings
function countSubstrings(s) {
    let res = 0

    for (let i = 0; i < s.length; i++){
        let left = i
        let right = i
        while (left >= 0 && right < s.length && s[left] === s[right]){
            res++
            left--
            right++
        }

        left = i
        right = i + 1
        while (left >= 0 && right < s.length && s[left] === s[right]){
            res++
            left--
            right++
        }
    }

    return res
};

console.log(countSubstrings("aaa"))
console.log(countSubstrings("abc"))