/*
Sum Odd Fibonacci Numbers

Given a positive integer num, return the sum of all add Fibonacci numbers 
that are less than or equal to num. 
The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1,1,2,3,5 and 8. 
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
less than or equal to 10 are 1,1,3, and 5.

Example 
 - sumOddFibonacciNums(10) should return 10
 - sumOddFibonacciNums(1000) should return 1785
 - sumOddFibonacciNums(4000000) should return 4613732
*/

function sumOddFibonacciNumbers(num) {
  let total = 0;
  let prevValue = 0;
  let currentValue = 1;

  while (currentValue <= num) {
    if (currentValue % 2 === 1) {
      sum += currentValue;
    }

    const nextCurrent = currentValue + prevValue;
    prevValue = currentValue;
    currentValue = nextCurrent;
  }

  return total;
}
