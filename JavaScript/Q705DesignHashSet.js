const SIZE = 1e5
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.set = new Array();
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  const keyIdx = key % SIZE;
  this.set[keyIdx] = key;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  const keyIdx = key % SIZE;
  this.set[keyIdx] = undefined;
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  const keyIdx = key % SIZE;
  const value = this.set[keyIdx];
  
  return value !== undefined && value > -1
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */