/**
 * 59. Spiral Matrix II
 */
var generateMatrix = function (n) {
  if (n < 1) return [[1]];

  let result = new Array(n);
  for (let i = 0; i < n; ++i) {
    result[i] = new Array(n).fill(0);
  }

  let top = 0;
  let bot = n;
  let left = 0;
  let right = n;

  let counter = 1;

  while ((top < bot) & (left < right)) {
    for (let i = left; i < right; ++i) {
      result[top][i] = counter;
      ++counter;
    }
    ++top;
    if (left < right) {
      for (let i = top; i < bot; ++i) {
        result[i][right - 1] = counter;
        ++counter;
      }
      --right;
    }
    if (top < bot) {
      for (let i = right - 1; i >= left; --i) {
        result[bot - 1][i] = counter;
        ++counter;
      }
      --bot;
    }
    if (left < right) {
      for (let i = bot - 1; i >= top; --i) {
        result[i][left] = counter;
        ++counter;
      }
      ++left;
    }
  }
  return result;
};
