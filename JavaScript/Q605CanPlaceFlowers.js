/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let lastPlantIdx = -2;
  
  return flowerbed.reduce((plantableCount, el, idx) => {
    if (el === 0) {
      if (Math.abs(lastPlantIdx - idx) > 2 || (idx === flowerbed.length-1 && Math.abs(lastPlantIdx - idx) === 2)) {
        lastPlantIdx = idx- 1;
        plantableCount += 1;
      }
    } else {
      lastPlantIdx = idx
    }
    
    return plantableCount;
  }, 0) >= n
};
