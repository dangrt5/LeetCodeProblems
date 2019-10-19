function SpreadSheet(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.table = initTable(rows, cols);

  function initTable(rows, cols) {
    return new Array(rows).fill(null).map(row => new Array(cols).fill(null))
  }
}

SpreadSheet.prototype.getCell = function(row, col) {
  return this.table[row][col];
}

SpreadSheet.prototype.putCell = function(row, col, val) {
  this.table[row][col] = val;
}

SpreadSheet.prototype.print = function() {
  for (let row = 0; row < this.rows; row++) {
    let rowToPrint = '';
    for (let col = 0; col < this.cols; col++) {
      const currentCell = this.table[row][col];
      rowToPrint += currentCell !== null ? currentCell : ''

      if (col !== this.cols && currentCell !== null) {
        rowToPrint += '|'
      }
    }
    console.log(rowToPrint);
  }
}

SpreadSheet.prototype.prettyPrint = function() {
  getLongestColWidth(this.table);
  // this.test();
  // for (let row = 0; row < this.rows; row++) {
  //   let rowToPrint = '';
  //   for (let col = 0; col < this.cols; col++) {
  //     const currentCell = this.table[row][col];
  //     rowToPrint += currentCell !== null ? currentCell : ''

  //     if (col !== this.cols && currentCell !== null) {
  //       rowToPrint += '|'
  //     }
  //   }
  //   console.log(rowToPrint);
  // }
}

const getLongestColWidth = table => {
  const rows = table.length;
  const cols = table[0].length;
  const tableByCols = new Array(cols).fill(null).map(col => [])

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const currentCell = table[row][col]
      tableByCols[col].push(currentCell)
    }
  }

  console.log(tableByCols)
}

// const getGridCols = grid => {
//   return grid.map((_, idx) => (
//     grid.map(row => row(idx))
//   ))
// }




const mySpreadSheet = new SpreadSheet(5,4)
// console.log(mySpreadSheet.table);
// mySpreadSheet.print();

mySpreadSheet.putCell(0,0, "Bob");
mySpreadSheet.putCell(0,1, "10");
mySpreadSheet.putCell(0,2, "Alice");
mySpreadSheet.putCell(1,0, "Sam");
mySpreadSheet.putCell(1,1, "20");
mySpreadSheet.putCell(1,2, "");

mySpreadSheet.print();
mySpreadSheet.prettyPrint();