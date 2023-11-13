// Valid Palindrome
function isPalindrome(s) {
    function isAlphaNumeric(char) {
        return (char >= '0' && char <= '9' ||
                char >= 'a' && char <= 'z' ||
                char >= 'A' && char <= 'Z');
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))