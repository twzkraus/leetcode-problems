/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.



Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
*/

var trimSpace = (arr) => {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '') {
          arr.splice(i, 1);
          i--;
      }
  }
}

var reverseWords = function(s) {
  let words = s.split(/\s+/);
  trimSpace(words);
  for (let i = 0; i < words.length / 2; i++) {
      let j = words.length - 1 - i;
      let temp = words[i];
      words[i] = words[j];
      words[j] = temp;
  }
  return words.join(' ');
};