/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1


Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
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
 * @return {number}
 */

/*
  i: root of binary tree
  o: maximum depth: # of nodes along longest path

  edge: no root: return null

  inner recursive function, track current depth always
  track max depth
  if you've reached a 'leaf' and current depth is greater than max, update it

  return max outside of inner recursive function

  create maxDepth variable

  define countDepth function

  call countDepth on root

  return max depth

  countDepth--
    i: TreeNode, current depth
    o: max distance from this node to a leaf
    base: node doesn't exist:
        set maxDepth to max of maxDepth, current depth
        return
    base: node is a leaf
        set maxDepth to max of maxDepth, current depth + 1
        return


    otherwise, if node has left, call countDepth with left, current + 1
    otherwise, if node has right, call countDepth with right, current + 1

*/
var maxDepth = function(root) {
  let maximumDepth = 0;

  const considerDepth = (val) => {
      maximumDepth = Math.max(maximumDepth, val);
  }

  const countDepth = (node, depth) => {
      if (!node) {
          considerDepth(depth);
          return;
      }
      if (!node.left && !node.right) {
          considerDepth(depth + 1);
          return;
      }

      if (node.left) {
          countDepth(node.left, depth + 1);
      }
      if (node.right) {
          countDepth(node.right, depth + 1);
      }

  }

  countDepth(root, 0);

  return maximumDepth;
};
