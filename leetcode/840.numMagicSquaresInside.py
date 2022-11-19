# 840. Magic Squares In Grid
class Solution:
    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        counter = 0
        for i in range(len(grid)-2):
            for j in range(len(grid[i])-2):
                if self.checkMagical(grid, i, j):
                    counter += 1
        return counter

    def checkMagical(self, grid, col, row):
        sum1 = 0
        sum2 = 0
        # check diagonals
        for i in range(3):
            sum1 += grid[i+col][i+row]
            sum2 += grid[i+col][3-i-1+row]
        if sum1 != sum2:
            return False
        # check rows and cols
        for i in range(3):
            sumRow = 0
            sumCol = 0
            for j in range(3):
                # check if numbers above 10 and below 0
                if grid[i+col][j+row] > 9 or grid[i+col][j+row] < 1:
                    return False
                # check if  distinct numbers
                if not (self.distintNumbers1to9(col, row, grid[i+col][j+row], grid)):
                    return False
                sumRow += grid[i+col][j+row]
                sumCol += grid[j+col][i+row]
            # check sums with a diagonal sum
            if not (sumRow == sumCol == sum1):
                return False
        return True

    def distintNumbers1to9(self, col, row, number, grid):
        count = 0
        for i in range(3):
            for j in range(3):
                if grid[col+i][row+j] == number:
                    count += 1
        # no more than 1
        if count == 1:
            return True
        else:
            return False
