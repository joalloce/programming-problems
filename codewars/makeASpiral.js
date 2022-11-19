/**
 * 3 kyu
 *
 * Make a spiral
 *
 * Instructions:
 *
 * Your task, is to create a NxN spiral with a given size.
 */
function spiralize(n) {
  let result = create2DArray(n);

  let top = 0;
  let bot = n;
  let left = 0;
  let right = n;

  while ((top < bot) & (left < right)) {
    for (let i = left - 1; i < right; ++i) {
      result[top][i] = 1;
    }
    top += 2;
    if (left < right) {
      for (let i = top - 1; i < bot; ++i) {
        result[i][right - 1] = 1;
      }
      right -= 2;
    }
    if (top < bot) {
      for (let i = right; i >= left; --i) {
        result[bot - 1][i] = 1;
      }
      bot -= 2;
    }
    if (left < right) {
      for (let i = bot; i >= top; --i) {
        result[i][left] = 1;
      }
      left += 2;
    }
  }

  return result;
}
function create2DArray(N) {
  let result = new Array(N);
  for (let i = 0; i < N; ++i) {
    result[i] = new Array(N).fill(0);
  }
  return result;
}
