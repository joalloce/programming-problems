class Solution:
    def fib(self, n: int) -> int:
        fibonacciArray = [0, 1]
        if n >= 2:
            for i in range(2, n+1):
                newNumber = fibonacciArray[i-1] + fibonacciArray[i-2]
                fibonacciArray.append(newNumber)
        return fibonacciArray[n]
