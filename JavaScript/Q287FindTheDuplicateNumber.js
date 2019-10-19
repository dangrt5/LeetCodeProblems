/**
 * @param {number[]} nums
 * @return {number}
 */
// Time - O(n) | Space - O(1)
const findDuplicate = nums => {
// Find the intersection point of the two runners.
  let tortoise = nums[0];
  let hare = nums[0];
  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);

  // Find the "entrance" to the cycle.
  tortoise = nums[0]
  
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return tortoise;  
}

// Time - O(nlogn) | Space - O(1)
// const findDuplicate = nums => {
//   nums.sort();
//   for (let i = 0; i < nums.length-1; i++) {
//     if (nums[i] === nums[i+1]) return nums[i]
//   }
//   return -1;
// };

