/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// Time - O(m) | Space - O(1)
const hammingDistance = (x, y) => {
  const xBit = x.toString(2)
  const yBit = y.toString(2)
  
  let [longer, shorter] = x >= y ? [xBit, yBit] : [yBit, xBit]
  shorter = shorter.padStart(longer.length, '0')
  
  let count = 0;
  let [i, j] = [shorter.length, longer.length];
  
  while (i >= 0) {
    if (shorter[i--] !== longer[j--]) count += 1;
  }
  
  return count
};
