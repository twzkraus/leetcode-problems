/*
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.



Example 1:


Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
Example 2:


Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]


Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.


Follow up:

Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/*
  i: m x n grid (board)
  o: next state of board

  c: each cell is either-- live: 1, or dead: 0
  c: cells interact with neighbors using rules:
    * live cell, < 2 live neighbors: dies
    * live cell, 2-3 live neighbors: stays alive
    * live cell, > 3 live neighbors: dies
    * dead cell, === 3 live neighbors: becomes live
  c: births & deaths occur simultaneously

  hl: iterate over entire board, check each cell's neighbors for provided rules, populate new board based on it

  helper function: return # of live neighbors

  create newBoard
  iterate over board
    check number of live neighbors
      apply changes as required
  return newBoard

*/
var gameOfLife = function(board) {

  var isValid = (i, j) => {
      return i >= 0 && i < board.length && j >= 0 && j < board[0].length;
  };

  var countLiveNeighbors = (row, col) => {
      let count = 0;
      for (let i = row - 1; i <= row + 1; i++) {
          for (let j = col - 1; j <= col + 1; j++) {
              if (!(i === row && j === col) && isValid(i,j) && (board[i][j])) {
                  count++;
              }
          }
      }
      return count;
  };

  let newBoard = [];

  for (let i = 0; i < board.length; i++) {
      newBoard.push([]);
      for (let j = 0; j < board[i].length; j++) {
          let thisCount = countLiveNeighbors(i, j);
          if (board[i][j]) {
              if (thisCount < 2 || thisCount > 3) {
                  newBoard[i][j] = 0;
              } else {
                  newBoard[i][j] = 1;
              }
          } else {
              if (thisCount === 3) {
                  newBoard[i][j] = 1;
              } else {
              newBoard[i][j] = 0;
              }
          }
      }
  }

};

