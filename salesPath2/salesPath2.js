/*
Sales Path
The car manufacturer Honda holds their distribution system in the form of a tree (not necessarily binary). The root is the company itself, and every node in the tree represents a car distributor that receives cars from the parent node and ships them to its children nodes. The leaf nodes are car dealerships that sell cars direct to consumers. In addition, every node holds an integer that is the cost of shipping a car to it.

Take for example the tree below:

alt

A path from Honda’s factory to a car dealership, which is a path from the root to a leaf in the tree, is called a Sales Path. The cost of a Sales Path is the sum of the costs for every node in the path. For example, in the tree above one Sales Path is 0→3→0→10, and its cost is 13 (0+3+0+10).

Honda wishes to find the minimal Sales Path cost in its distribution tree. Given a node rootNode, write a function getCheapestCost that calculates the minimal Sales Path cost in the tree.

Implement your function in the most efficient manner and analyze its time and space complexities.

For example:

Given the rootNode of the tree in diagram above

Your function would return:

7 since it’s the minimal Sales Path cost (there are actually two Sales Paths in the tree whose cost is 7: 0→6→1 and 0→3→2→1→1)

Constraints:

[time limit] 5000ms

[input] Node rootNode

0 ≤ rootNode.cost ≤ 100000
[output] integer
*/

/*
  i: rootnode
  o: cheapest root-to-leaf cost
  edge: 2 equal costs: fine, because we return the minimal cost
  edge: no nodes: return 0
  edge: negative node: won't happen
  edge: one node: return its val

  ex:
      0
    / |  \
  5   3     6
 /   /\    / \
4    2 0   1 5
    |  |
    1  10
    |
    1

  hl: compute each rtl cost, return the min

  ~~pseudocode
  ** recursion, depth first search--inner recursion
  function recurse
    basecase: node has no children--return value
    recursive case: node has children
      for each child
        path sum is: value + recurse(child)
        add path sum to sums array
    return minimum of sums array
  call recurse on rootnode


  system is in a tree (see this.children)
  leaf nodes (no children): car dealerships

  goal: find cheapest sales path cost
*/

function getCheapestCost(rootNode) {
  const recurse = (node) => {
    if (!node.children.length) {
      return node.cost;
    }

    let minSum = Infinity;
    node.children.forEach(child => {
      let thisSum = node.cost + recurse(child);
      if (thisSum < minSum) {
        minSum = thisSum;
      }
    });
    return minSum;
  }

  return recurse(rootNode);
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}

let base = new Node(0);
let left = new Node(5);
left.children.push(new Node(4));
let right = new Node(6);
right.children.push(new Node(1), new Node(5));

let mid = new Node(3);
let l3a = new Node(2);
let l3b = new Node(0);
mid.children = [l3a, l3b];
l3b.children.push(new Node(10));
let l4 = new Node(1);
let l5 = new Node(1);
l4.children.push(l5);
l3a.children.push(l4);

base.children = [left, mid, right];

console.log(getCheapestCost(base));
