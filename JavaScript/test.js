var longestCommonSubsequence = function(text1, text2) {
  let temp = [];
  let max = 0;
  for(let i = 0; i <= text1.length; i++) {
      temp.push(new Array(text2.length + 1).fill(0));
  }
  for(let i = 1; i < temp.length; i++) {
      for(let j = 1; j < temp[0].length; j++) {
          if(text1[i-1] === text2[j-1]) {
              temp[i][j] = temp[i-1][j-1] + 1
          } else {
              temp[i][j] = Math.max(temp[i-1][j], temp[i][j-1]);
          }
          max = Math.max(max, temp[i][j]);
      }
  }
  return max;
};

console.log(longestCommonSubsequence("ABAZDC", "BACBAD"))

// const getPermutations = (word, permutation = '', permutations = new Set()) => {
//   if (permutation) {
//     permutations.add(permutation);
//   }

//   if (!word) return;

//   for (let i = 0; i < word.length; i++) {
//     permutation += word.charAt(i);
//     const charsLeft = word.slice(0, i) + word.slice(i+1);
//     getPermutations(charsLeft, permutation, permutations);
//     permutation = permutation.slice(0, permutation.length-1);
//   }

//   return [...permutations];
// }

// console.log(getPermutations("ABA"))