/**
 * 22. Generate Parentheses
 */
var generateParenthesis = function (n) {
  let output = [];
  let str = "";
  for (let i = 0; i < n * 2; ++i) {
    str += " ";
  }
  parenthesis(str, 0, n, 0, 0, output);
  return output;
};

const parenthesis = (str, position, n, open, close, output) => {
  if (close === n) {
    output.push(str);
    return;
  } else {
    if (open > close) {
      str = str.split("");
      str[position] = ")";
      str = str.join("");
      parenthesis(str, position + 1, n, open, close + 1, output);
    }
    if (open < n) {
      str = str.split("");
      str[position] = "(";
      str = str.join("");
      parenthesis(str, position + 1, n, open + 1, close, output);
    }
  }
};
