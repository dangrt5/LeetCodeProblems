/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = s => {
  const sArr = s.split('');
  let i = 0; 
  let j = sArr.length - 1;
  
  while (i < j) {
    const isLeftVowel = 'aeiou'.includes(sArr[i].toLowerCase());
    const isRightVowel = 'aeiou'.includes(sArr[j].toLowerCase());
    if (!isLeftVowel) i++;
    if (!isRightVowel) j--;
    if (isLeftVowel && isRightVowel) swap(i++, j--, sArr)
  }

  return sArr.join('');
};

const swap = (i, j, arr) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;;
}