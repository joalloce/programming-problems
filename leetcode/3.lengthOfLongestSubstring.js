/**
 * 3. Longest Substring Without Repeating Characters
 */
var lengthOfLongestSubstring = function (s) {
  let dict = [];
  let max = -1;
  if (s.length <= 1) return s.length;
  s.split("").forEach((c) => {
    if (dict.includes(c)) {
      let index = dict.indexOf(c);
      dict = dict.slice(index + 1);
    }
    dict = [...dict, c];
    max = Math.max(dict.length, max);
  });
  return max;
};
