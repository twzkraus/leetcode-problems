/*

Given a string s, return the longest palindromic substring in s.

*/

/**
 * @param {string} s
 * @return {string}
 */
var isPalindrome = function(str) {
  if (str.length === 1) {
      return true;
  }
  for (let i = 0; i < (str.length) / 2; i++)  {
      let thisChar = str[i];
      let compChar = str[str.length - 1 - i];
      if (thisChar !== compChar) {
          return false;
      }
  }
  return true;
};

var longestPalindrome = function(s) {
  let start = 0;
  let end = 1;
  let longest;
  while (start < s.length) {
      let substring = s.slice(start, end);
      if (!longest || isPalindrome(substring) && substring.length > longest.length) {
          longest = substring;
      }
      if (end === s.length) {
          start++;
          end = start + 1;
      } else {
        end++;
      }
  }
  return longest;
};

/* Test case */
// console.log(longestPalindrome('a'));
