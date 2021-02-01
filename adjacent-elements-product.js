/*
Given an array of integers, find the pair of adjacent elements that has the largest produc
and return that product.

Example
For inputArray = [3, 6, -2, -5, 7, 3], 
the output should be adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product. 
*/

function adjacentElementsProduct(nums) {
  let finalProduct = 0;

  for (let i = 1; i < nums.length; i++) {
    let currentSum = nums[i] * nums[i - 1];

    if (currentSum > finalProduct) {
      finalProduct = currentSum;
    }
  }

  return finalProduct;
}
