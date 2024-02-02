// Function to calculate GCD (Greatest Common Divisor)
function calculateGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to calculate LCM (Least Common Multiple)
function calculateLCM(a, b) {
    // LCM(a, b) = (a * b) / GCD(a, b)
    return (a * b) / calculateGCD(a, b);
}

// Example usage
const num1 = 12;
const num2 = 18;

const lcmResult = calculateLCM(num1, num2);
console.log(`LCM of ${num1} and ${num2} is: ${lcmResult}`);
