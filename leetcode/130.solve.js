/**
 * 130. Surrounded Regions
 */
var solve = function (board) {
  if (board.length <= 2 || board[0].length <= 2) return;
  let regions = [];
  let visitedMatrix = board.map((row) => row.map((e) => false));
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      currentRegion = [];
      moveThroughRegions(board, i, j, visitedMatrix, currentRegion);
      if (currentRegion.length) {
        if (isValid(board, currentRegion)) {
          regions.push(currentRegion);
        }
      }
    }
  }
  if (regions.length && regions[0].length === board.length * board[0].length)
    return;
  for (let i = 0; i < regions.length; ++i) {
    for (let j = 0; j < regions[i].length; ++j) {
      let x = regions[i][j][0];
      let y = regions[i][j][1];
      if (isRegionSorrounded(board, x, y, regions[i])) {
        board[x][y] = "X";
      }
    }
  }
};

const moveThroughRegions = (board, i, j, visitedMatrix, currentRegion) => {
  if (visitedMatrix[i][j]) return;
  visitedMatrix[i][j] = true;
  if (board[i][j] === "X") return;

  currentRegion.push([i, j]);
  const neighbors = getNeighbors(board, i, j);
  for (const [neighborI, neighborJ] of neighbors) {
    moveThroughRegions(
      board,
      neighborI,
      neighborJ,
      visitedMatrix,
      currentRegion
    );
  }
};

const getNeighbors = (board, i, j) => {
  const neighbors = [];
  if (i !== 0) neighbors.push([i - 1, j]);
  if (j !== 0) neighbors.push([i, j - 1]);
  if (i !== board.length - 1) neighbors.push([i + 1, j]);
  if (j !== board[0].length - 1) neighbors.push([i, j + 1]);
  return neighbors;
};

const isRegionSorrounded = (board, i, j, neighbors) => {
  if (
    i !== 0 &&
    j !== 0 &&
    i !== board.length - 1 &&
    j !== board[0].length - 1
  ) {
    if (
      isNeighbor(board, i - 1, j, neighbors) ||
      isNeighbor(board, i, j - 1, neighbors) ||
      isNeighbor(board, i + 1, j, neighbors) ||
      isNeighbor(board, i, j + 1, neighbors)
    ) {
      board[i][j] = "X";
    }
  }
  return false;
};

const isNeighbor = (board, i, j, neighbors) => {
  if (board[i][j] === "X") return true;
  for (let k = 0; k < neighbors.length; ++k) {
    if (neighbors[k][0] === i && neighbors[k][1] === j) {
      return true;
    }
  }
  return false;
};

const isValid = (board, newRegion) => {
  for (let i = 0; i < newRegion.length; ++i) {
    if (
      newRegion[i][0] === 0 ||
      newRegion[i][1] === 0 ||
      newRegion[i][0] === board.length - 1 ||
      newRegion[i][1] === board[0].length - 1
    ) {
      return false;
    }
  }
  return true;
};
