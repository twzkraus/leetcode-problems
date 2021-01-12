/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Follow up: Could you solve it without converting the integer to a string?



Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false


Constraints:

-2**31 <= x <= 2**31 - 1
*/

/**
 * @param {number} x
 * @return {boolean}
 */

/*
  i: integer
  o: boolean whether it's a palindrome
  c (if poss): without converting to string
  edge: negative number is automatic fail

  hl: compare digits at different locations--use logarithms and modulus

  extract digits from integer using Math.log10, put them into an array
    use 'divisor' to extract each one
    ex: divisor = 10, digit would be x % (divisor)
        if x is 121, this yields 1
        x: subtract out digit, divide whole thing by divisor
  return whether array is palindrome--iterate from both edges inward

*/
var isPalindrome = function(x) {
  var arrayIsPalindrome = function(arr) {
      for (let i = 0; i < arr.length / 2; i++) {
          let j = arr.length - 1 - i;
          if (arr[i] !== arr[j]) {
              return false;
          }
      }
      return true;
  }

  if (x < 0) {
      return false;
  }

  let divisor = 10;
  let digits = [];
  while (x >= 1) {
      let digit = x % divisor;
      digits.push(digit);
      x = (x - digit) / divisor;
  }

  return arrayIsPalindrome(digits);
};

