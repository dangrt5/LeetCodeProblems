const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
}

LRUCache.prototype.get = function(key) {
  const value = this.cache.has(key) ? this.cache.get(key) : -1
  if (this.cache.has(key)) {
    this.cache.delete(key)
    this.cache.set(key, value)
  }
  return value;
}

LRUCache.prototype.put = function(key, value) {
  this.cache.delete(key);
  if (this.cache.size === this.capacity) {
    const leastRecentlyUsedKey = this.cache.keys().next().value;
    this.cache.delete(leastRecentlyUsedKey);
  }
  
  this.cache.set(key, value)
}