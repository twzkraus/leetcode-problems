/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.



Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]


Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
  i: array nums
  o: running sum array: sum everything to left
  c: num could be +/-
  c: nums.length between 1 and 1000--no empty
  ex: [1, 4, 6, 8, -2, 14]
    =>[1, 5,11, 19,17, 31]

  create result array
  iterate over array with incrementer i
    if i is at least 1
      add to result: result item to left, plus current in nums (result[i] = result[i - 1] + nums[i])
    else
      add to result: current in nums
  return result

*/
var runningSum = function(nums) {
  let result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
      result.push(result[i - 1] + nums[i]);
  }
  return result;
};
