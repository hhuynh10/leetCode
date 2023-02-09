def guessNumber(n):
    low, high = 1, n

    while low <= high:
        mid = (low + high) // 2
        myGuess = guess(mid)

        if myGuess == -1:
            high = mid - 1
        elif myGuess == 1:
            low = mid + 1
        else:
            return mid