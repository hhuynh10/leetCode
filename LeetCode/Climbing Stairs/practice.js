function climbStairs(n){
    let one = 1
    let two = 1

    for (let i = 1; i <= n - 1; i ++){
        let temp = one
        one = one + two
        two = temp
    }
    return one
}

console.log(climbStairs(5))