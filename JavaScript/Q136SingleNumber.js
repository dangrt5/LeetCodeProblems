/**
 * @param {number[]} nums
 * @return {number}
 */
// Time - O(N) | Space - O(1)
const singleNumber = nums => {
  return nums.reduce((x, el) => x ^= el, 0)
}

// Time - O(N) | Space - O(N)
// const singleNumber = nums => {
//   const numsHash = nums.reduce((hash, el) => {
//     if (hash[el]) hash[el] = hash[el] + 1
//     else hash[el] = 1
//     return hash
//   }, {})
  
//   // console.log(numsHash)
//   const hashArr = Object.keys(numsHash);
  
//   for (let i = 0; i < hashArr.length; i++) {
//     const val = hashArr[i]
//     if (numsHash[val] === 1) return val;
//   }
// };

