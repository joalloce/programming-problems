/**
 * 371. Sum of Two Integers
 */
var getSum = function (a, b) {
  if (b === 0) return a;
  if (b < 0) {
    for (let i = b; i !== 0; ++i) {
      a--;
    }
  } else {
    for (let i = b; i !== 0; --i) {
      a++;
    }
  }
  return a;
};
