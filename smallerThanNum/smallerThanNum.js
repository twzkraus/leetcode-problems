/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
  i: array of numbers--assume integers
  o: array of numbers--integers with above assumption
     the number of elements in array that are smaller than current
  c: NA
  complexity: no constraints
  ex: [8, 1, 2, 2, 3] // => [4, 0, 1, 1, 3]
  edge: [7, 7, 7, 7] // => [0, 0, 0, 0]

  high level: visit each element of array, count how many of the other elements are less than it

  create counts array
  iterate over array with counter
    set counter equal to 0
    check the elements j where i !== j
      if array[j] < array[i]
        increment counter
    push counter into counts
  return counts

*/

/*
~~Optimization~~
  if a < b && b < c,
  then a < c

  Input: nums = [6,5,4,8]
  Output: [2,1,0,3]
*/
var smallerNumbersThanCurrent = function(nums) {
  let counts = [];
  for (let i = 0; i < nums.length; i++) {
      let counter = 0;
      for (let j = 0; j < nums.length; j++) {
          if (i !== j) {
              if (nums[j] < nums[i]) {
                  counter++;
              }
          }
      }
      counts.push(counter);
  }
  return counts;
};