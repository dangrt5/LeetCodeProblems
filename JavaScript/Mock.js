function SpreadSheet(row, col) {
  this.row = row;
  this.col = col;
  this.matrix = createMatrix(this.row, this.col);

  function createMatrix (row, col) {
    const matrix = []
    for (let i = 0; i < row; i++) {
      matrix.push(new Array(col))
    }
    return matrix;    
  }
}

SpreadSheet.prototype.update = function(i, j, input) {
  this.matrix[i][j] = input;
}

SpreadSheet.prototype.print = function() {
  for (let i = 0; i < this.row; i++) {
    let row = '';
    for (let j = 0; j < this.col; j++) {
      const el = this.matrix[i][j] ? this.matrix[i][j] : '';
      // if (el !== '') {
        row += el;
        if (j !== this.col-1) row += '|'
      // }
    }
    console.log(row);
  }
}

SpreadSheet.prototype.prettyPrint = function() {

}

// const getColLongestWidth = matrix => {
//   const longestColWidthList = [];
//   const matrixCols = getGridCols(matrix);


//   for (let i = 0; i < matrix.length; i++) {
//     let longest = 0;
//     for (let j = 0; j < matrix[0].length; j++) {
//       let el = matrix[j][i];
//       if (el) {
//         el = el.toString()
//         if (el.length > longest) {
//           longest = el.length;
//         }
//       }
//       longestColWidthList.push(longest);
//     }
//   }
//   return longestColWidthList;
// }

// const getGridCols = grid => {
//   return grid.map((_, idx) => (
//     grid.map(row => row(idx))
//   ))
// }

const createMatrix = (row, col) => {
  const matrix = []
  for (let i = 0; i < row; i++) {
    matrix.push(new Array(col))
  }
  return matrix;
}

const printMatrix = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    const row = []
    for (let j = 0; j < matrix[0].length; j++) {
      row.push(matrix[i][j] ? matrix[i][j] : '')
    }
    console.log(row)
  }
}

const mySpreadSheet = new SpreadSheet(4, 3);

mySpreadSheet.update(0, 0, 'bob');
mySpreadSheet.update(0, 1, 10);
mySpreadSheet.update(0, 2, 'foo');
mySpreadSheet.update(1, 0, 'alice');
mySpreadSheet.update(1, 1, 5);
// mySpreadSheet.update(0, 1, null);
mySpreadSheet.update(2, 0, null);
mySpreadSheet.update(2, 1, null);
mySpreadSheet.update(2, 2, null);
mySpreadSheet.update(3, 0, null);
mySpreadSheet.update(3, 1, null);
mySpreadSheet.update(3, 2, null);

// printMatrix(mySpreadSheet.matrix);
mySpreadSheet.print();

// console.log(getColLongestWidth(mySpreadSheet.matrix));

// console.log(getGridCols(mySpreadSheet.matrix));

