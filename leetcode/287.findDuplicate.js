/**
 * 287. Find the Duplicate Number
 */
var findDuplicate = function (nums) {
  let dict = [];
  for (const n of nums) {
    if (dict[n]) {
      return n;
    } else {
      dict[n] = 1;
    }
  }
};
