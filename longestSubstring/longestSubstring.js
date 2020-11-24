/*

Given a string s, find the length of the longest substring without repeating characters
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }
  let start = 0;
  let end = 1;
  let substring = s.slice(start, end);
  let longestLength = end - start;
  let currentLength = end - start;
  while (s.length - start > longestLength) {
    while (!substring.includes(s[end]) && end < s.length) {
      end++;
      substring = s.slice(start, end);
      currentLength = end - start;
      longestLength = Math.max(longestLength, currentLength);
    }
    start++;
    substring = s.slice(start, end);
    currentLength = end - start;
    longestLength = Math.max(longestLength, currentLength);
  }
  return longestLength;
};
