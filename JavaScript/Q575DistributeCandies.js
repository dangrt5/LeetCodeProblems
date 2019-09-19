/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = candies => {
  const kinds = new Set(candies);
  const halfCandiesKind = Math.floor(candies.length/2) 
  return Math.min(kinds.size, halfCandiesKind)
};