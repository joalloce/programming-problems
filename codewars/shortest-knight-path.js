/**
 * 4 kyu
 *
 * Shortest Knight Path
 *
 * Instructions:
 *
 * Given two different positions on a chess board, find the least number of moves it would take a knight to get from one to the other. The positions will be passed as two arguments in algebraic notation. For example, knight("a3", "b5") should return 1.
 *
 * The knight is not allowed to move off the board. The board is 8x8.
 *
 * For information on knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29
 *
 * For information on algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_%28chess%29
 *
 * (Warning: many of the tests were generated randomly. If any do not work, the test cases will return the input, output, and expected output; please post them.)
 */

const SIZE = 8;
const x = [-2, -1, 1, 2, 2, 1, -1, -2];
const y = [1, 2, 2, 1, -1, -2, -2, -1];
let result = Number.MAX_SAFE_INTEGER;
let solutionFound = false;
let xStack = [];
let yStack = [];

let xFinish = -1;
let yFinish = -1;

function knight(start, finish) {
  result = Number.MAX_SAFE_INTEGER;
  solutionFound = false;
  xStack = [];
  yStack = [];

  let xStart = fromCharToNumber(start.charAt(0));
  let yStart = parseInt(start.charAt(1)) - 1;
  xFinish = fromCharToNumber(finish.charAt(0));
  yFinish = parseInt(finish.charAt(1)) - 1;

  path(xStart, yStart, 0);

  return result;
}

function path(x1, y1, steps) {
  if (steps < result) {
    for (let k = 0; k < x.length; ++k) {
      let i = x1 + x[k];
      let j = y1 + y[k];
      if (i >= 0 && j >= 0 && i < SIZE && j < SIZE && !checkBacksteps(i, j)) {
        xStack.push(i);
        yStack.push(j);
        if (i === xFinish && j === yFinish) {
          result = steps + 1;
        }
        path(i, j, steps + 1);
        xStack.pop();
        yStack.pop();
      }
    }
  }
}

function fromCharToNumber(c) {
  let letters = "abcdefgh";
  return letters.indexOf(c);
}

function checkBacksteps(x, y) {
  let passed = false;
  for (let i = 0; i < xStack.length; ++i) {
    if (x === xStack[i] && y === yStack[i]) {
      passed = true;
    }
  }
  return passed;
}
