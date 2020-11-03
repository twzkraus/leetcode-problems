/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/*
  i: string
  o: longest substring with no repeats
  c: length from 0 to 5 * 104
  c: s can have letters, digits, symbols, spaces
  edge: empty string--return 0

  use two pointers--start & end
  substring = s.slice(start, end)
  start pointer starts at 0
  while substring doesn't include the value at the end pointer, increment length and end

  if substring does include value at end pointer, we know that the longest substring can't include current start & end
  increment start and start again
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

/* Test Cases */
// console.log(lengthOfLongestSubstring("abcabcbb"), 'should be 3');
// console.log(lengthOfLongestSubstring("bbbbb"), 'should be 1');
// console.log(lengthOfLongestSubstring("pwwkew"), 'should be 3');
// console.log(lengthOfLongestSubstring(""), 'should be 0');
// console.log(lengthOfLongestSubstring("abcdafgh"), 'should be 7');

