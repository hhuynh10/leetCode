// Product of Array Except Self
function productExceptSelf(nums) {
    const n = nums.length;
    const leftProducts = new Array(n);
    const rightProducts = new Array(n);
    const result = new Array(n);

    // Calculate the product of all elements to the left of each element
    let product = 1;
    for (let i = 0; i < n; i++) {
        leftProducts[i] = product;
        product *= nums[i];
    }
    console.log(leftProducts)

    // Calculate the product of all elements to the right of each element
    product = 1;
    for (let i = n - 1; i >= 0; i--) {
        rightProducts[i] = product;
        product *= nums[i];
    }
    console.log(rightProducts)

    // Calculate the result based on the left and right products
    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }

    return result;
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))