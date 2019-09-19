const SIZE = 1e5;
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.map = new Array();
};

const getKeyIndex = (key) => {
  return key % SIZE;
}

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  const keyIdx = getKeyIndex(key);
  this.map[keyIdx] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  const keyIdx = getKeyIndex(key);
  return this.map[keyIdx] > -1 && this.map[keyIdx] !== undefined ? this.map[keyIdx] : -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  const keyIdx = getKeyIndex(key);
  this.map[keyIdx] = undefined;
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */