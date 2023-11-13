// Top K Frequent Elements

var topKFrequent = function (nums, k) {
  let count = {};

  // Count the frequency of each number
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }
  console.log(count);

  // Create an array of unique numbers
  const uniqueNums = Object.keys(count).map(Number);
  console.log(uniqueNums);

  // Sort unique numbers by frequency in descending order
  uniqueNums.sort((a, b) => count[b] - count[a]);
  console.log(uniqueNums);

  // Return the top k frequent elements
  return uniqueNums.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
