/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const anagrams = [];
  const pMap = p.split('').reduce((map, el) => {
    map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);
    return map;
  }, new Map())

  const sMap = new Map();
  let startIdx = 0;

  for (let j = 0; j < s.length; j++) {
    const key = s[j];

    if (!pMap.has(key)) {
      sMap.clear();
      startIdx = j + 1;
      continue;
    }

    if (sMap.has(key)) {
      const pVal = pMap.get(key);
      const sVal = sMap.get(key);
      sMap.set(key, sVal + 1);
      if (sMap.get(key) > pVal) {
        const startIdxKey = s[startIdx];
        if (startIdxKey === key) {
          let startIdxVal = sMap.get(startIdxKey);
          startIdxVal > 1 ? sMap.set(startIdxKey, startIdxVal - 1) : sMap.delete(startIdxKey);
          startIdx += 1;
        } else  {
          sMap.clear();
          startIdx = j;
          continue;
        }
      }
    } else {
      sMap.set(key, 1);
    }

    if (j + 1 - startIdx === p.length) {
      anagrams.push(startIdx);
      const startIdxKey = s[startIdx];
      let startIdxVal = sMap.get(startIdxKey);
      startIdxVal > 1 ? sMap.set(startIdxKey, startIdxVal - 1) : sMap.delete(startIdxKey);
      startIdx += 1;
    }
  }

  return anagrams;
};
