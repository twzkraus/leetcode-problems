/*
Start from integer 1, remove any integer that contains 9 such as 9, 19, 29...

So now, you will have a new integer sequence: 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, ...

Given a positive integer n, you need to return the n-th integer after removing. Note that 1 will be the first integer.



Example 1:

Input: n = 9
Output: 10


Constraints:

1 <= n <= 8 x 10^8
*/

/**
 * @param {number} n
 * @return {number}
 */

/*
  i: n
  o: nth integer after removing all 9's

  first 100:
 9, 19, 29, 39, 49, 59, 69, 79, 89, 99 (10)
90, 91, 92, 93, 94, 95, 96, 97, 98 (9)


   borders:
   i  o
   9  10
   18 20
   27 30
   36 40

*/

var newInteger = function(n) {
  let result = '';
  while (n >= 1) {
      console.log(n);
      result = Math.floor(n % 9).toString() + result;
      n /= 9;
  }
  return parseInt(result);
};
