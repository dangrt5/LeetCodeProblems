const isCaseInsensitiveWithinDistanceEqual = (s1, s2, dist = 0) => {
  let diffCount = 0;
  if (Math.abs(s1.length - s2.length) > dist) return false;
  // if (s1.length !== s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i].toUpperCase() !== s2[i].toUpperCase()) {
      diffCount += 1;
      if (diffCount > dist) return false
    };
  }
  return true;
}

console.log(isCaseInsensitiveWithinDistanceEqual('abc', 'ABC'))  // true
console.log(isCaseInsensitiveWithinDistanceEqual('abc', 'def'))  // false
console.log(isCaseInsensitiveWithinDistanceEqual('abc', 'ABCD', 1)) // true
console.log(isCaseInsensitiveWithinDistanceEqual('abc', 'AC', 1))   // true