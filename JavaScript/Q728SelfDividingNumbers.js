/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  const results = [];
  
  for (let i = left; i <= right; i++) {
    let digits = i;
    let isSelfDividing = true;
    
    while (digits > 1) {
      let digit = digits % 10;
      
      if (i % digit !== 0) {
        isSelfDividing = false;
        break;
      } 
      digits = Math.floor(digits/10);
    }
    if (isSelfDividing) results.push(i);
  }
    
  return results;
};
