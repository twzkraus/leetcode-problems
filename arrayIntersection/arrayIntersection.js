/*
Given two arrays, write a function to compute their intersection.

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

ex: nums1 = [1,2,2,1], nums2 = [2,2]
    output: [2,2]

ex: nums1 = [4,9,5], nums2=[9,4,9,8,4]
    output: [4,9]
*/

/*
  i: two arrays
  o: all elements that are present in both
  c: elements should appear as many times as it shows in both arrays
     result can be in any order
  ASSUME: only integers will be used in arrays
  ex: above.


  high level: count how many times each element is in each array, return the similars

  for each array
    count the occurrences in an object
  create result array
  iterate over the first nums object
    add each number to result array with the number of occurrences being the minimum between the two counts objects
  return result
*/

var getCounts = (array) => {
  let counts = {};
  array.forEach(el => {
    if (!counts[el]) {
      counts[el] = 1;
    } else {
      counts[el]++;
    }
  });
  return counts;
};

var addMinimumIntersect = (num, count1, count2) => {
  const numberNum = parseInt(num);
  const duplicates = Math.min(count1[num], count2[num]);
  let result = [];
  while (result.length < duplicates) {
    result.push(numberNum);
  }
  return result;
}

var intersect = function(nums1, nums2) {
  const nums1Counts = getCounts(nums1);
  const nums2Counts = getCounts(nums2);

  let result = [];
  for (let num in nums1Counts) {
    const thisIntersection = addMinimumIntersect(num, nums1Counts, nums2Counts);
    result = result.concat(thisIntersection);
  }
  return result;
};

/* Test Cases */
// console.log(intersect([1,2,2,1],[2,2]));

// console.log(intersect([4,9,5],[9,4,9,8,4]));
