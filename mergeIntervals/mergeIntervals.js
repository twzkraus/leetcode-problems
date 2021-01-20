/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.


Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/*
  i: intervals (tuples)
  o: non-overlapping intervals that cover all intervals in output
  ex: intervals = [[1,3], [2,6],[8,10],[15,18]]
        result  = [[1,6]       ,[8,10],[15,18]]
  ex: intervals = [[1,4],[4,5]]
        result  = [[1,5]]

  edge: number ends one range and starts another: considered overlapping
  edge: overlap on two sides (e.g. [1,2], [4,5], [2,4])

  hl: iterate over intervals, search for overlap, merge ranges, do it again

  ~~merge function
  turn 2 intervals into one with [min, max]

  ~~isOverlap function
  consider two values from first range
    return true if either value is greater than low end of other range and less than high end of other range

  create mergeHappened variable, set to true
  while mergeHappened
    set mergeHappened to false
    compare each interval to all other intervals
    if there is overlap
      merge them
      set mergeHappened to true
  return intervals
*/
var merge = function(intervals) {

  var isOverlap = function(i, j) {
      let r1 = intervals[i];
      let r2 = intervals[j];
      console.log(r1[0], r2[0], r1[0], r2[1]);
      return (r1[0] >= r2[0] && r1[0] <= r2[1]) ||
          (r1[1] >= r2[0] && r1[1] <= r2[1]) ||
          (r2[0] >= r1[0] && r2[0] <= r1[1]) ||
          (r2[1] >= r1[0] && r2[1] <= r1[1]);
  }

  var merge = function(i, j) {
      let vals = intervals[i].concat(intervals[j]);
      intervals[i] = [Math.min(...vals), Math.max(...vals)];
      intervals.splice(j, 1);
  }

  let mergeHappened = true;
  while (mergeHappened) {
      mergeHappened = false;
      for (let i = 0; i < intervals.length - 1; i++) {
          for (let j = i + 1; j < intervals.length; j++) {
              if (isOverlap(i, j)) {
                  merge(i, j);
                  mergeHappened = true;
                  break;
              }
          }
      }
  }
  return intervals;

};
