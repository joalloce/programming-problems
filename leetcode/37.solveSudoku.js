/**
 * 37. Sudoku Solver
 */
var solveSudoku = function (board) {
  solve(board);
};

function solve(board) {
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] === ".") {
        for (let n = 1; n <= 9; ++n) {
          if (isOkToPlace(i, j, n, board)) {
            board[i][j] = n.toString();
            if (solve(board)) {
              return true;
            } else {
              board[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isOkToPlace(row, col, number, board) {
  return (
    !isInItsRow(row, number, board) &&
    !isInItsCol(col, number, board) &&
    !isInItsBox(row, col, number, board)
  );
}

function isInItsRow(row, number, board) {
  for (let i = 0; i < 9; ++i) {
    if (board[row][i] === number.toString()) {
      return true;
    }
  }
  return false;
}

function isInItsCol(col, number, board) {
  for (let i = 0; i < 9; ++i) {
    if (board[i][col] === number.toString()) {
      return true;
    }
  }
  return false;
}

function isInItsBox(row, col, number, board) {
  let initRow = row - (row % 3);
  let initCol = col - (col % 3);
  for (let i = initRow; i < initRow + 3; ++i) {
    for (let j = initCol; j < initCol + 3; ++j) {
      if (board[i][j] === number.toString()) {
        return true;
      }
    }
  }
  return false;
}
