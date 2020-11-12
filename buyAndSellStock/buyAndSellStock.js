/*
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/

/*
  i: array of numbers (prices)
  o: maximum profit from buying & selling stock
  c: one transaction at a time
  ex: [7, 1, 5, 3, 6, 4] // => 7
    reasoning: -1, +5, -3, +6 (buy at $1, sell at $5, buy at $3, sell at $6)

  high level: if stock is about to go up (next element) & I don't have any, buy
              if stock is about to go down (next element) & I do have any, sell

  create total, set to 0
  iterate over array with i
    if `tomorrow's` stock is higher and I don't have it, buy (total -= current price)
    else if `tomorrow's` stock is lower and I have it, sell (total += current price)
  return total

*/

var maxProfit = function(prices) {
  let total = 0;
  let held = false;
  prices.forEach((price, i) => {
    let nextPrice = prices[i + 1];
    if (nextPrice > price && !held) {
      total -= price;
      held = !held;
    } else if (nextPrice < price && held) {
      total += price;
      held = !held;
    }
  });
  if (held) {
    total += prices[prices.length - 1];
  }
  return total;
};

/* Test Case */
// console.log(maxProfit([7, 1, 5, 3, 6, 4]), 'should be 7')
