/*
Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.



Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
/*
  i: array
  o: boolean whether numbers of occurrences is unique

  hash map for values and count of occurrences
  use counts to determine if there are any duplicates within those

*/
var uniqueOccurrences = function(arr) {
  let counts = {};
  let countOfCounts = {};

  var count = (val, object) => {
      if (!object[val]) {
          object[val] = 0;
      }
      object[val]++;
  };

  for (let i = 0; i < arr.length; i++) {
      count(arr[i], counts);
  }

  let countVals = Object.values(counts);

  for (let i = 0; i < countVals.length; i++) {
      count(countVals[i], countOfCounts);
  }

  return Object.keys(counts).length === Object.keys(countOfCounts).length;

};