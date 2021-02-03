/*
Extract Each Kth

Given array of integeres, remove each kth element from it. 
  
Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
and k = 3, the output sholud be extractEachKth(inputArray, k) = [1, 2, 3, 4, 5, 7, 8, 10]
*/

function extractEachKth(nums, index) {
  return (result = nums.filter((value) => value % index !== 0));
}
