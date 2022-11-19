/**
 * 79. Word Search
 */
var exist = function (board, word) {
  let data = { word, index: 0, result: false, visited: [] };
  for (let row = 0; row < board.length; ++row) {
    for (let col = 0; col < board[0].length; ++col) {
      data.index = 0;
      data.visited = board.map((row) => row.map((e) => false));
      moveThroughBoard(board, row, col, data, "");
    }
  }
  console.log(data.visited);
  return data.result;
};

const moveThroughBoard = (board, row, col, data, path) => {
  if (data.word[data.index] !== board[row][col]) return;
  if (path + board[row][col] === data.word) {
    data.result = true;
  }
  data.visited[row][col] = true;
  data.index++;
  const neigbors = getNeigbors(board, row, col, data);
  for (const [neigborRow, neigborCol] of neigbors) {
    moveThroughBoard(
      board,
      neigborRow,
      neigborCol,
      data,
      path + board[row][col]
    );
  }
  data.index--;
  data.visited[row][col] = false;
};

const getNeigbors = (board, row, col, data) => {
  const neighbors = [];
  if (row !== 0 && !data.visited[row - 1][col]) neighbors.push([row - 1, col]);
  if (col !== 0 && !data.visited[row][col - 1]) neighbors.push([row, col - 1]);
  if (row !== board.length - 1 && !data.visited[row + 1][col])
    neighbors.push([row + 1, col]);
  if (col !== board[0].length - 1 && !data.visited[row][col + 1])
    neighbors.push([row, col + 1]);
  return neighbors;
};
