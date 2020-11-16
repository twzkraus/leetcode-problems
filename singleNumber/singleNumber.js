/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
*/

/*
  i: array of integers, one of which does not appear twice
  o: the number that does not appear twice
  ASSUME: The number that doesn't appear twice will always appear only once
  c: 1 <= nums.length <= 3 * 104
     -3 * 104 <= nums[i] <= 3 * 104
     Each element in the array appears twice except for one element which appears only once.
       ** confirms above assumption
  ex: nums = [2, 2, 1] // => output is 1
      nums = [4, 1, 2, 1, 2] // => output is 4
      nums = [1] // => output is 1

  high level: visit each number in array, check whether it is in the array twice

  ~~naive solution with O(n) time & space complexity~~
  create counts object
  iterate over array
    if number is not in counts, add it to counts
    if it is in counts, set count to 2
  return the one number that's in counts with just one count

  ~~Optimized solution without using extra memory~~
  * one option: sort the array in place (O(n) operation), then iterate over it again to find duplicates
    - sort array
    - iterate over array
      if next element is the same as current, skip ahead 2 elements
      otherwise, return the current element
      -> this ensures that pairs are skipped, while solo elements are isolated
*/

// [1, 2, 2]
// [1, 1, 2, 2, 4]
// [1]
var singleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      i += 2;
    } else {
      return nums[i];
    }
  }
  return null;
};

/* Test Cases */
// console.log(singleNumber([2, 2, 1])); // => output is 1
// console.log(singleNumber([4, 1, 2, 1, 2])); // => output is 4
// console.log(singleNumber([1])); // => output is 1
