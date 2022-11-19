/**
 * 4 kyu
 *
 * Snail
 *
 * Instructions:
 * Given an n x n array, return the array elements arranged from outermost
 * elements to the middle element, traveling clockwise.
 *
 */
snail = function (array) {
  if (!array[0][0]) return [];

  let result = [];

  let top = 0;
  let bot = array.length;
  let left = 0;
  let right = array.length;

  while ((top < bot) & (left < right)) {
    for (let i = left; i < right; ++i) {
      result.push(array[top][i]);
    }
    ++top;
    if (left < right) {
      for (let i = top; i < bot; ++i) {
        result.push(array[i][right - 1]);
      }
      --right;
    }
    if (top < bot) {
      for (let i = right - 1; i >= left; --i) {
        result.push(array[bot - 1][i]);
      }
      --bot;
    }
    if (left < right) {
      for (let i = bot - 1; i >= top; --i) {
        result.push(array[i][left]);
      }
      ++left;
    }
  }

  return result;
};
