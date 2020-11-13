/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

/*
  i: array of integers
  o: boolean
     true if any duplicates
     false if all elements unique
  c: linear time
  c: O(1) space
  ex: [5, 2, 3, 4, 1, 1] // => true

  high level: use an object to count the instances of each element. If repeat, return true

  create counts object
  iterate over nums
    if the num already exists in counts, we found a duplicate--return true
    otherwise, add it to counts for future ref.
  return false
*/

var containsDuplicate = function(nums) {
  let counts = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (counts[num]) {
      return true;
    } else {
      counts[num] = true;
    }
  }
  return false;
};

/* Test cases */
// console.log(containsDuplicate([1,2,3,4,5,1]), 'should be true');
// console.log(containsDuplicate([1,2,3,4,5]), 'should be false');
// console.log(containsDuplicate([1,1,1,1]), 'should be true');
