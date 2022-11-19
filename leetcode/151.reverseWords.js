/**
 * 151. Reverse Words in a String
 */
var reverseWords = function (s) {
  let result = [];
  s.split(" ")
    .reverse()
    .forEach((w) => {
      if (w !== "") {
        result.push(w);
      }
    });
  return result.join(" ");
};
