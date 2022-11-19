/**
 * 9. Palindrome Number
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let s = x.toString();
  return s === s.split("").reverse().join("");
};
