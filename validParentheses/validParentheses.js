/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
/*
  i: string with parens, brackets, braces
  o: boolean whether it's valid (every one open has a close too)
  edge: nested

  hl: three counters for (, [, {
    open is +1, close is -1
    at the end, check whether they are all back to 0
*/
var isValid = function(s) {
  let p = 0;
  let b = 0;
  let c = 0;
  let latest = [];
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (char === '(') {
          p++;
          latest.push('p');
      }
      if (char === ')') {
          if (latest.pop() !== 'p') {
              return false;
          }
          p--;
      }
      if (char === '[') {
          b++;
          latest.push('b');
      }
      if (char === ']') {
          if (latest.pop() !== 'b') {
              return false;
          }
          b--;
      }
      if (char === '{') {
          c++;
          latest.push('c');
      }
      if (char === '}') {
          if (latest.pop() !== 'c') {
              return false;
          }
          c--;
      }
  }
  return p === 0 && b === 0 && c === 0;
};
