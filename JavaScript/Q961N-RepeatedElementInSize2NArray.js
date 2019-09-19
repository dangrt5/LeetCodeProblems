/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = A => {
  const unique = new Set();
  
  for (let i = 0; i < A.length; i++) {
    if (unique.has(A[i])) return A[i];
    unique.add(A[i])
  }
  
  return -1;
};
