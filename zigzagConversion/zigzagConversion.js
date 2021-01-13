/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);


Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"


Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/*
  i: string
  o: string in zigzag pattern given numRows
  c: use all chars in first column. Otherwise, if you can't fit numRows chars in a diagonal, don't even try.
    e.g.:
    you want this:
    P   A   H   N
    A P L S I I G
    Y   I   R
    not this:
    P Y L H I
    A A S R G
    P I I N

    solution: chars added in this order (for numRows = 3)
    159
    2468
    37


    hl: iterate over string, store chars in rows and join rows together

    create rowIndex, set to 0
    create incrementer, set to 1
    create empty strings for each row
    iterate over s
        add char to rows at rowIndex
        increment rowIndex
        if rowIndex points beyond last row, turn incrementer into -1
        if rowIndex points before first row, turn incrementer into 1

    join & return rows

*/
var convert = function(s, numRows) {
  if (numRows === 1) {
      return s;
  }
  let rowIndex = 0;
  let incrementer = 1;
  let rows = [];
  while (rows.length < numRows) {
      rows.push('');
  }
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      rows[rowIndex] += char;
      rowIndex += incrementer;
      if (rowIndex === numRows) {
          incrementer = -1;
          rowIndex -= 2;
      }
      if (rowIndex < 0) {
          incrementer = 1;
          rowIndex += 2;
      }
  }
  return rows.join('');
};
