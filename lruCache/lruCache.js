/*

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
Follow up:
Could you do get and put in O(1) time complexity?



Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4


Constraints:

1 <= capacity <= 3000
0 <= key <= 3000
0 <= value <= 104
At most 3 * 104 calls will be made to get and put.
*/

/**
 * @param {number} capacity
 */
var ListNode = function(key, value, next = null) {
  this.key = key;
  this.value = value;
  this.next = next;
  this.prev = null;
};

var ListWithHash = function(capacity) {
  this.hash = {};
  this.head = null;
  this.tail = null;
  this.capacity = capacity;
  this.length = 0;
};

ListWithHash.prototype.prune = function() {
  this.removeHead();
};

ListWithHash.prototype.removeKeyIfPresent = function(key) {
  let node = this.hash[key];
  if (node) {
      let leftNode = node.prev;
      let rightNode = node.next;
      node.prev = null;
      node.next = null;
      if (leftNode) {
          leftNode.next = rightNode;
      }
      if (rightNode) {
          rightNode.prev = leftNode;
      }
      if (node === this.head) {
          this.head = rightNode;
      }
      if (node === this.tail) {
          this.tail = leftNode;
      }
      delete this.hash[key];
      this.length--;
      return node;
  }
};

ListWithHash.prototype.addTail = function(key, value) {
  this.removeKeyIfPresent(key);
  let newNode = new ListNode(key, value);
  if (!this.head) {
      this.head = newNode;
  } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
  }
  this.tail = newNode;
  this.hash[key] = newNode;
  this.length++;

  if (this.length > this.capacity) {
      this.prune();
  }
};

ListWithHash.prototype.removeHead = function() {
  let oldHead = this.head;
  if (!this.head) {
      return;
  } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
  } else {
      this.head = this.head.next;
  }
  delete this.hash[oldHead.key];
  this.length--;
  return oldHead;
};

ListWithHash.prototype.retrieve = function(key) {
  let node = this.hash[key];
  if (node) {
      this.addTail(node.key, node.value);
      return node.value;
  } else {
      return -1;
  }
};

var LRUCache = function(capacity) {
  this.list = new ListWithHash(capacity);
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  return this.list.retrieve(key);
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  this.list.addTail(key, value);
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/