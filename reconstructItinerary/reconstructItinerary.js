/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
One must use all the tickets once and only once.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.
*/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

/*
  i: list of airline tickets: tuple [from, to]
  o: full itinerary
  c: itinerary must begin with JFK
  c: multiple valid: return itinerary with smallest lexical order (e.g. ['JFK', 'LGA'] rather than ['JFK', 'LGB'])
  c: airports: 3 cap letters
  c: at least one valid itinerary
  c: must use all tickets once
  edge: multiple tickets with same route

  aside from first (JFK) and final airport, each airport needs to be an end AND a start
  idea: make a tree of flights, e.g. for:
    [JFK, 'SFO'],[ SFO, 'LHR'] , [SFO, 'ATL'], [LHR, 'LAX'], [ATL, 'SFO']:

                          JFK
                        /
                    SFO
                    /  \
                LHR     ATL
                /           \
            LAX             SFO
                          /
                        LHR
                      /
                    LAX

  itin: JFK - SFO - ATL - SFO - LHR - LAX
  find the best route that matches number of legs (lowest lexical order)

  pseudo~~
  create tree
  count number of legs

  create solutions array
  traverse tree, count how many legs you've taken
    if it's equal to total number of legs, you found a possible solution--save it in solutions

  sort solutions lexically, return the smallest one
*/

var Tree = function(value, parent = null) {
  this.val = value;
  this.parent = parent;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  let newTree = new Tree(value, this);
  this.children.push(newTree);
};

var findItinerary = function(tickets) {
  let totLegs = tickets.length;
  let trees = [];
  tickets.forEach(ticket => {
      if (ticket[0] === 'JFK') {
          trees.push(new Tree('JFK'));
      }
  });

};
