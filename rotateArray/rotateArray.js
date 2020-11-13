/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/

/*
  i: array (nums), steps (k)
  o: nothing--this is a decorator
  c: O(1) space complexity
  constraints: 1 <= nums.length <= 2 * 10**4
               -231 <= nums[i] <= 231 - 1
               0 <= k <= 10**5
  ex: nums = [1,2,3,4,5,6,7], k = 3 // => [5,6,7,1,2,3,4]

  'rotating' one step involves pop() and then unshift()
  k times, pop off the end and add it to the front
*/

var rotate = function(nums, k) {
  while (k) {
    let lastEl = nums.pop();
    nums.unshift(lastEl);
    k--;
  }
};

/* Test cases */

// let nums = [1,2,3,4,5,6,7];

// console.log(rotate(nums,3)); // => [5,6,7,1,2,3,4]))

// console.log(nums);
