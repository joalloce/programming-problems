# 6. Zigzag Conversion
class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows == 1:
            return s
        lines = []
        currentLine = 0
        direction = "down"

        for i in range(numRows):
            lines.append([])

        for i in range(len(s)):
            lines[currentLine].append(s[i])
            if direction == "down":
                currentLine += 1  # 1 row down
            else:
                currentLine -= 1  # 1 row up

            if currentLine == numRows - 1:
                direction = "up"  # up when bot
            if currentLine == 0:
                direction = "down"  # down when top

        result = ""
        for i in range(len(lines)):
            for j in range(len(lines[i])):
                result += lines[i][j]

        return result
