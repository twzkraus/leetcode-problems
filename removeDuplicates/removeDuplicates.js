/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

/*
  i: sorted array of numbers
  o: new length of numbers
  c: modify in-place
  c: nums sorted in ascending order
  c: array elements are only numbers
  ex: removeDuplicates([1, 1, 2, 3, 4, 4, 4, 5]) // => 5

  plan:
  iterate over nums
    set numIdentical = 0;
    while the next element is the same as current,
      increment numIdentical
    splice nums at starting index, take out numIdentical elements
  return nums.length

  [1, 2, 3, 3, 4, 4, 4, 5]
  |
  v
  [1, 2, 3, 4, 4, 4, 5]
  |
  v
  [1, 2, 3, 4, 5]


  [1, 1, 1]
*/

var removeDuplicates = function(nums) {
  let i = 0;
  while (i < nums.length - 1) {
    let j = i;
    while (nums[j + 1] === nums[i]) {
      j++;
    }
    nums.splice(i + 1, j - i);
    i++;
  }
  return nums.length;
};

/* Test cases */
// console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 4, 5]) === 5);
// console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 4, 5]) === 5);
// console.log(removeDuplicates([1, 1, 1, 1]) === 1);
