/*
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "111" can have each of its "1"s be mapped into 'A's to make "AAA", or it could be mapped to "11" and "1" ('K' and 'A' respectively) to make "KA". Note that "06" cannot be mapped into 'F' since "6" is different from "06".

Given a non-empty string num containing only digits, return the number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.



Example 1:

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
Example 3:

Input: s = "0"
Output: 0
Explanation: There is no character that is mapped to a number starting with 0. The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20".
Since there is no character, there are no valid ways to decode this since all digits need to be mapped.
Example 4:

Input: s = "1"
Output: 1


Constraints:

1 <= s.length <= 100
s contains only digits and may contain leading zero(s).
*/

/**
 * @param {string} s
 * @return {number}
 */

/*
  i: non-empty string of digits
  o: # of ways to decode it
  c: encoding could involve digits in a variety of ways

  hl: decision tree: if digit is 1 or 2, it could possibly be a two-digit encoding

  recursive solution
  base case: empty string. You've found an encoding--return 1
  create count, set to 0
  if first digit is invalid encoding (0)
    return 0--no sense in continuing down
  otherwise, remove first digit & run remaining into numDecodings
    add numDecodings to count
  if first & second are between 1 and 26
    remove them and run remaining into numDecodings
        add numDecodings to count
  return count
*/
var numDecodings = function(s, startPoint = 0) {
  if (s.length - startPoint < 2 && s[startPoint] !== '0') {
      return 1;
  }
  let count = 0;
  let oneDig = parseInt(s[startPoint]);
  let twoDig = parseInt(s[startPoint] + s[startPoint + 1]);

  if (oneDig === 0) {
      return 0;
  } else if (oneDig < 10) {
      count += numDecodings(s, startPoint + 1);
  }

  if (twoDig > 0 && twoDig <= 26) {
      count += numDecodings(s, startPoint + 1);
  }

  return count;
};
