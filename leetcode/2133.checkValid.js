/**
 * 2133. Check if Every Row and Column Contains All Numbers
 */
var checkValid = function (matrix) {
  if (matrix.length <= 1) return true;

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix.length; ++j) {
      if (!onlyYou(i, j, matrix[i][j], matrix)) {
        return false;
      }
    }
  }
  return true;
};

function onlyYou(row, col, number, board) {
  return isInItsRow(row, number, board) && isInItsCol(col, number, board);
}

function isInItsRow(row, number, board) {
  let count = 0;
  for (let i = 0; i < board.length; ++i) {
    if (board[row][i] === number) {
      count++;
    }
  }
  return count === 1 ? true : false;
}

function isInItsCol(col, number, board) {
  let count = 0;
  for (let i = 0; i < board.length; ++i) {
    if (board[i][col] === number) {
      count++;
    }
  }
  return count === 1 ? true : false;
}
