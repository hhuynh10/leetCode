// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    let newStr = str.substring(0, num)
    if (newStr !== str){
      newStr += '...'
    }
    
    console.log(newStr)
    return newStr
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

function truncateString1(str, num){
    let newStr = ''
    for (let i = 0; i < num; i++){
        newStr += str[i]
    }
    if (newStr !== str){
        newStr += "..."
    }
    
    console.log(newStr)
    return newStr
}

truncateString1("A-tisket a-tasket A green and yellow basket", 8);

function truncateString2(str, maxLength) {
    // Check if the length of the string is greater than the maximum length
    if (str.length > maxLength) {
        // Use slice to get the truncated string and add "..." at the end
        return str.slice(0, maxLength) + "...";
    } else {
        // If the string is already within the maximum length, return the original string
        return str;
    }
}

truncateString1("A-tisket a-tasket A green and yellow basket", 8);







