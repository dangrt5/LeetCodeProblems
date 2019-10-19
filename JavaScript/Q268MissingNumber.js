/**
 * @param {number[]} nums
 * @return {number}
 */
// Time - O(N) | Space - O(1)
const missingNumber = nums => {
  const correct = (nums.length + 1) * (nums.length) / 2
  return correct - nums.reduce((sum, el) => sum += el);
};