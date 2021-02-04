/*
Leetcode: Merge Two Sorted Lists
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.



Example 1:


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]


Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

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
  i: two linked lists (head nodes)
  o: combined list that's still sorted
  edge: one or both lists are empty--empty list is null
  ex: [1,2,4] && [1,3,4]
  [1,1,2,3,4,4]

  create result, current, newNode
  create node1, node2
  set node1 to l1
  set node2 to l2
  while node1 or node2 exists
    if node1.val > node2.val
      newNode = new Node(node2.val)
      next of current is newNode
      current becomes newNode
      increment node2 to node2.next
    else (node1.val is less, or they're equal)
      newNode = new Node(node1.val)
      next of current is newNode
      current becomes newNode
  return result


  compare values at those pointers
    add the lesser one to result
    increment the one that has been added to result
    **if you've reached the end of one list, keep adding from the other list until it's also null (reached end)

*/
var mergeTwoLists = function(l1, l2) {
  let result, current, newNode, node1, node2;
  node1 = l1;
  node2 = l2;
  while (node1 || node2) {
      if (!node1 || (node2 && node2.val < node1.val)) {
          newNode = new ListNode(node2.val);
          node2 = node2.next;
      } else {
          newNode = new ListNode(node1.val);
          node1 = node1.next;
      }

      if (!result) {
          result = newNode;
      } else {
          current.next = newNode;
      }

      current = newNode;
  }
  return result || null;
};
