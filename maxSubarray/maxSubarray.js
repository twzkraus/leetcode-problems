/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.



Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1
Example 5:

Input: nums = [-100000]
Output: -100000


Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105


Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  i: integer array
  o: sum of subarray with largest sum
  edge: negative nums
  brute: sum every subarray, calculate max
  ex: [1,2,3,4]
      [1,2,3,4]
      * IF all nums are positive, return nums itself
  ex:       [-2,1,-3,4,-1,2,1,-5,4]
  current:   -2,1,-2,4,3, 5,6, 1,5
  max:       -2,1,1, 4,4, 5,6, 6


  default: nums[0]

  keep track of current sum, max sum
    negative found: reset current to max of: 0 or current

  create current, max values. set to first int in nums
  iterate over array, starting at nums[1]
    add int to current
    reset max to maximum of current, max
    if int is negative, set current to max of: 0 or current
  return max

*/
var maxSubArray = function(nums) {
  let max = nums[0];
  let current = Math.max(0, nums[0]);
  for (let i = 1; i < nums.length; i++) {
      current += nums[i];
      max = Math.max(max, current);
      current = Math.max(0, current);
  }
  return max;
};
