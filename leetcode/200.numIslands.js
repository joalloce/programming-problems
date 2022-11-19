/**
 * 200. Number of Islands
 */
var numIslands = function (grid) {
  let islands = 0;
  let seaVisited = grid.map((row) => row.map((e) => false));
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      let currentIslandSize = { value: 0 };
      moveThroughTheSea(grid, i, j, seaVisited, currentIslandSize);
      if (currentIslandSize.value) islands++;
    }
  }
  return islands;
};

const moveThroughTheSea = (grid, i, j, seaVisited, currentIslandSize) => {
  if (seaVisited[i][j]) return;
  seaVisited[i][j] = true;
  if (grid[i][j] === "0") return;
  currentIslandSize.value++;
  const neighborLands = getNeighborLands(grid, i, j);
  for (const [neighborI, neighborJ] of neighborLands) {
    moveThroughTheSea(
      grid,
      neighborI,
      neighborJ,
      seaVisited,
      currentIslandSize
    );
  }
};

const getNeighborLands = (grid, i, j) => {
  const neighborLands = [];
  if (i !== 0) neighborLands.push([i - 1, j]);
  if (j !== 0) neighborLands.push([i, j - 1]);
  if (i !== grid.length - 1) neighborLands.push([i + 1, j]);
  if (j !== grid[0].length - 1) neighborLands.push([i, j + 1]);
  return neighborLands;
};
