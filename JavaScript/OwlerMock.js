/**
 * Write a comparator that takes two strings and returns a standard integer value: 
 *          something negative if the first string is "smaller,"
 *          zero if they are "equal," 
 *          and something positive if the first string is "larger." 
 * We want to agree with the standard comparator for all cases except one: 
 * if we encounter a consecutive string of integers, we want to read it for its numeric value,
 * and use that as the comparison.
 * 
 * For instance, in the standard string comparator, "a10b" comes before "a2b", because 'a' == 'a' and '1' < '2'.
 * In our string ordering, I want to reverse this, instead parsing it so that we see 'a' == 'a', but 10 > 2.
 */
// a2b a10b // -1
// a10b a2b // 1
// a2b a2b // 0
// qwerrwqe1 a2b // 1

// A a //
// String.charCodeAt(index);

// ptrIdx
// ptrIdx
// a10b 97c
const isNum = (num) => {
  return !isNaN(num)
}

const getFullNumber = (currentIdx, str) => {
  let i = currentIdx + 1;
  while (i < str.length) {
    const el = str[i];

    if (!isNum(el)) break;
    i += 1;
  }
  return parseInt(str.substring(currentIdx, i));
}

const compare = (str1, str2) => {
  let currentIdx = 0;

  while (currentIdx < str1.length) {
    let str1El = str1[currentIdx];
    let str2El = str2[currentIdx];
    console.log('Initial: str1El:', str1El, 'str2El:', str2El)

    if (isNum(str1El)) {
      str1El = getFullNumber(currentIdx, str1);
    } else {
      str1El = str1El === undefined ? 0 : str1El.charCodeAt(0)
    }

    if (isNum(str2El)) {
      str2El = getFullNumber(currentIdx, str2);
    } else {
      str2El = str2El === undefined ? 0 : str2El.charCodeAt(0)
    }



    console.log('Post : str1El:', str1El, 'str2El:', str2El)

    if (str1El > str2El) return 1
    else if (str1El < str2El) return -1

    currentIdx += 1;
  }
  
  if (str1.length < str2.length) return -1
  
  return 0;
}

// console.log('Expected: 0', 'Actual:', compare('abc', 'abc'));
// console.log('Expected: 1', 'Actual:', compare('abcd', 'abc'));
// console.log('Expected: -1', 'Actual:', compare('abc', 'abcd'));
// console.log('Expected: 1', 'Actual:', compare('abd', 'abc'));
console.log('Expected: -1', 'Actual:', compare('a2b', 'a10b'));
// console.log('Expected: 1', 'Actual:', compare('a10b', 'a2b'));
  