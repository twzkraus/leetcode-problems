/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.


Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
  i: root of binary tree
  o: boolean of validity
  edge: null tree
  edge: equal values for parent & child--return false

                5
            4       8
          3   6
          @6: maxLeft is 4, minRight is 5

  traverse tree, track maxLeftParent & minRightParent
    each node should be greater than maxLeftParent and less than minRightParent
*/


var isValidBST = function(root, maxLeftParent = -Infinity, minRightParent = Infinity) {
  if (!root) {
    return true;
  }

  let isRootValid = root.val > maxLeftParent && root.val < minRightParent;
  let isRightValid = isValidBST(root.right, Math.max(maxLeftParent, root.val), minRightParent);
  let isLeftValid = isValidBST(root.left, maxLeftParent, Math.min(minRightParent, root.val));

  return isRootValid && isRightValid && isLeftValid;
};
