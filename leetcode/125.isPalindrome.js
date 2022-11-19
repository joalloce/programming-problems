/**
 * 125. Valid Palindrome
 */
var isPalindrome = function (s) {
  s = s.replace(/[^\w]/g, "").toLocaleLowerCase().split("_").join("");
  return s === s.split("").reverse().join("");
};
