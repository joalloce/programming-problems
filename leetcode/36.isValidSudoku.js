/**
 * 36. Valid Sudoku
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] !== ".") {
        if (!onlyYou(i, j, board[i][j], board)) {
          return false;
        }
      }
    }
  }
  return true;
};

function onlyYou(row, col, number, board) {
  return (
    isInItsRow(row, number, board) &&
    isInItsCol(col, number, board) &&
    isInItsBox(row, col, number, board)
  );
}

function isInItsRow(row, number, board) {
  let count = 0;
  for (let i = 0; i < 9; ++i) {
    if (board[row][i] === number.toString()) {
      count++;
    }
  }
  return count === 1 ? true : false;
}

function isInItsCol(col, number, board) {
  let count = 0;
  for (let i = 0; i < 9; ++i) {
    if (board[i][col] === number.toString()) {
      count++;
    }
  }
  return count === 1 ? true : false;
}

function isInItsBox(row, col, number, board) {
  let count = 0;
  let initRow = row - (row % 3);
  let initCol = col - (col % 3);
  for (let i = initRow; i < initRow + 3; ++i) {
    for (let j = initCol; j < initCol + 3; ++j) {
      if (board[i][j] === number.toString()) {
        count++;
      }
    }
  }
  return count === 1 ? true : false;
}
