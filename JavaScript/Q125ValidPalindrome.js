/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  const str = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  let len = str.length;
  
  for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len-1-i]) return false
  }
  
  return true
};
