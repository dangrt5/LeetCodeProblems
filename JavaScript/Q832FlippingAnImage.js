/**
 * @param {number[][]} A
 * @return {number[][]}
 */

const flipAndInvertImage = A => {
  return A.map(row => row.map(el => el ^ 1).reverse())
};