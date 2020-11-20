/*
Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

/*
  i: m x n grid of strings--either "1" or "0"
  o: # of islands present

  ex:
  Input: grid = [
    ["0","0","0","0","0"],
    ["0","0","0","0","0"],
    ["0","0","0","0","0"],
    ["0","0","0","0","0"]
  ]
  Output: 1
  queue: []

  Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  Output: 3

  high level: you've found an island IF: 1 or group of 1's is surrounded by 0's OR borders

  recursively check each position, turn island into water once visited
    while location has island neighbors
      check each of them and sink them
  if island queue is empty, add 1 to counts
*/

var numIslands = function(grid) {
  let islandCount = 0;

  var sink = (i, j) => {
    grid[i][j] = "0";
    if (j > 0) {
      if (grid[i][j - 1] === '1') {
        sink(i, j - 1);
      }
    }
    if (j < grid[i].length - 1) {
      if (grid[i][j + 1] === '1') {
        sink(i, j + 1);
      }
    }
    if (i > 0) {
      if (grid[i - 1][j] === '1') {
        sink(i - 1, j);
      }
    }
    if (i < grid.length - 1) {
      if (grid[i + 1][j] === '1') {
        sink(i + 1, j);
      }
    }
  };

  let queue = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        islandCount++;
        sink(i, j);
      }
    }
  }
  return islandCount;
};

// let grid1 = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ];
// console.log(numIslands(grid1), 'should be 1');

// let grid2 = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ];
// console.log(numIslands(grid2), 'should be 3');
