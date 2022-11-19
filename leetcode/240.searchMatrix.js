/**
 * 240. Search a 2D Matrix II
 */
var searchMatrix = function (matrix, target) {
  let col = 0;
  let row = matrix.length - 1;
  while (col < matrix[0].length && row >= 0) {
    if (target < matrix[row][col]) {
      --row;
    } else if (target > matrix[row][col]) {
      ++col;
    } else {
      return true;
    }
  }
  return false;
};
