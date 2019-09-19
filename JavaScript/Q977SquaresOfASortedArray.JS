/**
 * @param {number[]} A
 * @return {number[]}
 */
// O(N)
const sortedSquares = A => { 
  const result = [];
  let i = 0;
  let j = A.length - 1;
  while (i <= j) {
    const front = A[i]**2;
    const end = A[j]**2;
    if (front > end) {
      result.push(front);
      i++;
    } else {
      result.push(end);
      j--;
    }
  }
  
  return result.reverse();
};

// O(NlogN)
// const sortedSquares = A => {
//   return A.map(el => el**2).sort((a,b) => a - b);
// };