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
*/

var addACount = (counts, element) => {
  if (!counts[element]) {
    counts[element] = 1;
  } else {
    counts[element]++;
  }
}

var singleNumber = function(nums) {
  let counts = {};
  nums.forEach(num => {
    addACount(counts, num);
  })
  for (let num in counts) {
    if (counts[num] === 1) {
      return num;
    }
  }
  return null;
};

/* Test Cases */
console.log(singleNumber([2, 2, 1])); // => output is 1
console.log(singleNumber([4, 1, 2, 1, 2])); // => output is 4
console.log(singleNumber([1])); // => output is 1
