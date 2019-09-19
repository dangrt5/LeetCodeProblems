/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = A => {
  let idx = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) swap(idx++, i, A)
  }
  return A;
};

const swap = (i,j, arr) => {
  const temp = arr[i];
  arr[i] = arr[j]
  arr[j] = temp;
}