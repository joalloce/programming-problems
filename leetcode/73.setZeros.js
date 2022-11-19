/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] === 0) {
        for (let x = 0; x < matrix.length; ++x) {
          if (matrix[x][j] !== 0) {
            matrix[x][j] = "a";
          }
        }
        for (let y = 0; y < matrix[i].length; ++y) {
          if (matrix[i][y] !== 0) {
            matrix[i][y] = "a";
          }
        }
      }
    }
  }
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] === "a") {
        matrix[i][j] = 0;
      }
    }
  }
};
