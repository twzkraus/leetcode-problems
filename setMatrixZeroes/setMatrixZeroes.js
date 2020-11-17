/*
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

/*
  i: m x n matrix with 0's and non-0's
  o: modify matrix in place, don't return anything
  c: m === matrix.length
     n === matrix[0].length
     1 <= m, n <= 200
     -2**31 <= matrix[i][j] <= 2**31 - 1
  ex:  [
        [1, 0, 1],
        [1, 1, 1],
        [1, 1, 1]
       ]
       |
       v
       [
        [0, 0, 0],
        [1, 0, 1],
        [1, 0, 1]
       ]
  high level: iterate over elements
    if you find a zero, set row & column elements to 0

  Use helper method: zeroRowAndCol
    takes in a row & column
    sets all elements in that row & col to zero

  ~~setZeroes~~
    iterate over matrix
      keep track of where you find zeroes--push indices into zeroLocs array
    zero out the rows & cols where zeroes existed

*/

var zeroRowAndCol = (matrix, rowNum, colNum) => {
  debugger;
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      let el = row[j];
      if (i === rowNum || j === colNum) {
        matrix[i][j] = 0;
      }
    }
  }
}

var setZeroes = function(matrix) {
  let zeroLocs = [];
  matrix.forEach((row, i) => {
    row.forEach((el, j) => {
      if (el === 0) {
        zeroLocs.push([i, j]);
      }
    });
  });

  zeroLocs.forEach(tuple => {
    zeroRowAndCol(matrix, tuple[0], tuple[1]);
  });
};

/* Test Case */
// let matrix1 = [
//   [1, 0, 1],
//   [1, 1, 1],
//   [1, 1, 1]
//  ];
// console.log('prior to modification', matrix1);
// setZeroes(matrix1);
// console.log('after modification', matrix1);
