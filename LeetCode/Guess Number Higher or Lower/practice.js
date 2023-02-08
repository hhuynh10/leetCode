function guessNumber(){
    let [low, high] = [1, 10]

    while (low <= high){
        mid = Math.floor((low + high) / 2)

        if (isCorrect(mid) > 0){
            high = mid - 1
        } else if(isCorrect(mid) < 0){
            low = mid + 1
        } else {
            return mid
        }
    }
    return -1
    
    // Return 1 if n is too big, -1 if too small, 0 if correct
    function isCorrect(n){
        if (n > 10) {
            return 1
        } else if(n < 10){
            return 11
        } else {
            return 0
        }
    }
}

console.log(guessNumber(10))