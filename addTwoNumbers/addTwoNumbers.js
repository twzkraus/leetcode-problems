/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
  i: two linked lists
  o: sum of the numbers

  hl: for both, visit notes in list, construct integer
  add integers
*/

var addTwoNumbers = function(l1, l2) {
  let carryover = 0;
  let resultEl, result;
  while (carryover || l1 || l2) {
      let v1, v2;
      v1 = l1 ? l1.val : 0;
      v2 = l2 ? l2.val : 0;
      let thisSum = v1 + v2 + carryover;
      if (thisSum > 9) {
          carryover = 1;
          thisSum = thisSum % 10;
      } else {
          carryover = 0;
      }

      if (resultEl) {
          thisResult = new ListNode(thisSum);
          resultEl.next = thisResult;
          resultEl = thisResult;
      } else {
          result = new ListNode(thisSum);
          resultEl = result;
      }
      l1 = l1.next || 0;
      l2 = l2.next || 0;
  }
  return result;
};