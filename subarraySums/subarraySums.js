/*
Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.



Example 1:

Input: A = [4,5,0,-2,-3,1], K = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by K = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]


Note:

1 <= A.length <= 30000
-10000 <= A[i] <= 10000
2 <= K <= 10000
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

/*
  i: array A of integers
  o: number of contiguous, non-empty subarrays with sum divisible by K
  complexity: quadratic time, linear space (need to consider every subarray, but don't need to save them anywhere)
  constraint: 'divisible': remainder is 0 when dividing
  edge: K = 0. Return 0--fraction would be undefined

  ideas:
  * two pointers for start & end of subarray
  * helper function to determine sum of subarray
  * counter for # subarrays divisible

  pseudo~~
  create counter, set to 0
  iterate `start` from 0 to A.length - 2
    iterate `end` from start + 1 to A.length - 1
      determine sum of subarray
      if sum is divisible by K
        increment counter
  return counter

  deficiencies:
    slow time complexity--possibly store sums as you go
        also, don't copy array: make sum function that operates on input array

*/
var subarraysDivByK = function(A, K) {
  var sumSubarray = function(start, end) {
      let sum = 0;
      for (let i = start; i < end; i++) {
          sum += A[i];
      }
      return sum;
  };

  var isDivisible = function(value) {
      return value % K === 0;
  };

  let counter = 0;

  for (let start = 0; start < A.length; start++) {
      for (let end = start + 1; end <= A.length; end++) {
          let thisSum = sumSubarray(start, end);
          if (isDivisible(thisSum)) {
              counter++;
          }
      }
  }

  return counter;
};
