/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    const col = new Set();
    const subBox = new Set();
    for (let j = 0; j < 9; j++) {
      const subI = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      const subJ = (i % 3) * 3 + (j % 3)
      const rowEl = board[i][j];
      const colEl = board[j][i];
      const subBoxEl = board[subI][subJ];
      
      if (row.has(rowEl) || col.has(colEl) || subBox.has(subBoxEl)) {
        return false
      } else {
        if (rowEl !== '.') row.add(rowEl);
        if (colEl !== '.') col.add(colEl);
        if (subBoxEl !== '.') subBox.add(subBoxEl);
      }
    }
  }
  return true;
};