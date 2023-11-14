// Best Time to Buy and Sell Stock
function maxProfit(prices) {
  let l = 0,
    r = 1;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let max = prices[r] - prices[l];
      maxProfit = Math.max(max, maxProfit);
    } else {
      l = r;
    }

    r++;
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
