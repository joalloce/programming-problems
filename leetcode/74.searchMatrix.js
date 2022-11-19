/**
 * 74. Search a 2D Matrix
 */
var searchMatrix = function (matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;
  for (let i = 0; i < n; ++i) {
    if (matrix[i][0] <= target && matrix[i][m - 1] >= target) {
      for (let j = 0; j < m; ++j) {
        if (matrix[i][j] === target) {
          return true;
        }
      }
    }
  }
  return false;
};
