/*
WEEK 6, DAYS 4 AND 5
restaurantOrders.js

---
PROMPT
---

In this two-day prompt, you'll have the opportunity to problem-solve with
a hashmap and then implement the sorting algorithm of your choice.

W6D4: Implement the hashmap solution and use JavaScript's native `sort`
method.

W6D5: Replace native `sort` implementation(s) with one of the key sort algorithms.
https://docs.google.com/document/d/1SKBhRjv0LhjKvUg33K-3bEloPy7n-GH_ibQz5DU8TFk/edit?usp=sharing
If you have time, implement multiple algos and run time tests, and/or create
a console-based display of the order queue.


Given the array `orders` (which represents the orders that customers have placed
in a restaurant), return the restaurant's order queue.  The order queue is a
table whose row entries denote how many of each food item each table ordered.
The first column is the table number and the remaining columns correspond to
each food item in alphabetical order.

The first row should be a header whose first column is “Table”, followed by the
names of the alphabetized food items. Note that the customer names are not part
of the table. The rows should be sorted in numerically increasing order.

orders[i]=[customerNamei,tableNumberi,foodItemi] where:
  * customerNamei is the name of the customer
  * tableNumberi is the customer's table
  * foodItemi is the item customer orders

---
EXAMPLE
---

Input:
orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]

Output:
[["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]]

Explanation:
The order queue looks like:

  Table Beef Burrito Ceviche Fried Chicken Water
  3     0            2       1             0
  5     0            1       0             1
  10    1            0       0             0

Table 3: David orders Ceviche and Fried Chicken, and Rous orders Ceviche.
Table 5: Carla orders Water and Ceviche.
Table 10: Corina orders Beef Burrito.

---
CONSTRAINTS
---
  1) 1 <= orders.length <= 5 * 10^4
  2) orders[i].length == 3
  3) 1 <= customerNamei.length, foodItemi.length <= 20
  4) customerNamei and foodItemi consist of lowercase and uppercase English letters and the space character.
  5) tableNumberi is a valid integer between 1 and 500.
 */

/*
  i: array of orders
  o: display table

  visit each person, determine which item they want

  return table relating table to item

  ex: [["David","3","Ceviche"],
  ["Corina","10","Beef Burrito"],
  ["David","3","Fried Chicken"],
  ["Carla","5","Water"],
  ["Carla","5","Ceviche"],
  ["Rous","3","Ceviche"]]
*/
var displayTable = function(orders) {
  const tables = {};
  const items = {};

  orders.forEach(order => {
      let tableNum = order[1];
      let item = order[2];
      if (!tables[tableNum]) {
          tables[tableNum] = {};
      }
      if (!tables[tableNum][item]) {
          tables[tableNum][item] = 0;
      }
      tables[tableNum][item]++;
      items[item] = true;
  });
  // convert to arrays
  const tableArray = [];
  for (let tableNum in tables) {
      let thisTable = [];
      thisTable.push(tableNum);
      for (let item in items) {
          thisTable.push(tables[tableNum][item] || 0);
      }
      tableArray.push(thisTable);
  }
  tableArray.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
  const headers = ['Table'].concat(Object.keys(items));
  tableArray.unshift(headers);
  return tableArray;

};