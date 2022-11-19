/**
 * 54. Spiral Matrix
 */
var spiralOrder = function (matrix) {
  if (matrix.length < 1) return [matrix[0][0]];

  let top = 0;
  let bot = matrix.length;
  let left = 0;
  let right = matrix[0].length;

  let result = [];

  while ((top < bot) & (left < right)) {
    for (let i = left; i < right; ++i) {
      result.push(matrix[top][i]);
    }
    ++top;
    if (left < right) {
      for (let i = top; i < bot; ++i) {
        result.push(matrix[i][right - 1]);
      }
      --right;
    }
    if (top < bot) {
      for (let i = right - 1; i >= left; --i) {
        result.push(matrix[bot - 1][i]);
      }
      --bot;
    }
    if (left < right) {
      for (let i = bot - 1; i >= top; --i) {
        result.push(matrix[i][left]);
      }
      ++left;
    }
  }
  return result;
};
