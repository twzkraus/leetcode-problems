/*
Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.



Example 1:

Input: n = 12
Output: 21
Example 2:

Input: n = 21
Output: -1
*/

/*
  i: positive integer n
  o: smallest integer with exactly the same digits & is greater than n
    else: return -1

  idea: adding 9 is a bit of a shortcut: 21 - 12 = 9, 32 - 23 = 9, etc.
  idea: convert to string, continuously add 1 until you have all the same digits
  idea: convert to string, rearrange digits in every possible combination
    take the smallest version that is greater than n
*/

var getAllCombos = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let result = [];
  let childCombos = getAllCombos(arr.slice(1));
  childCombos.forEach(el => {
    for (let i = 0; i <= el.length; i++) {
      result.push(el.slice(0, i) + arr[0] + el.slice(i));
    }
  });
  return result;
}

var nextGreaterElement = function(n) {
  let combos = getAllCombos(n.toString().split('')).map(str => parseInt(str));
  combos.sort((a, b) => a - b);
  let i = 0;
  while (combos[i] <= n && i < combos.length) {
    i++;
  }
  if (i === combos.length) {
    return -1;
  }
  return combos[i];
};


// console.log(getAllCombos(['1','2', '3']));
console.log(nextGreaterElement(123));