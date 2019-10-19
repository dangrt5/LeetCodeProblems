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
 *
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

const compare = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    const str1Val = str1[i] === undefined ? null : str1[i].charCodeAt(0);
    const str2Val = str2[i] === undefined ? null : str2[i].charCodeAt(0);
    
    if (typeof str1Val === 'Number')
    if (str1Val > str2Val) return 1
    else if (str1Val < str2Val) return -1
  }
  
  if (str1.length < str2.length) return -1
  
  return 0;
}

const str1 = 'dbc';
const str2 = 'abc';

console.log(compare(str1, str2));
  