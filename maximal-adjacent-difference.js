/*
Given an array of integers, find the maximal absolute difference between 
any two of its adjacent elements
  
Example

For inputArray = [2,4,1,0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3.
For inputArray = [2,9,1,0], the output should be arrayMaximalAdjacentDifference(inputArray) = 8.
*/

function arrayMaximalAdjacentDifference(nums) {
  var sumArr = [];

  for (let i = 1; i < nums.length; i++) {
    sumArr.push(Math.abs(nums[i - 1] - nums[i]));
  }

  return (result = sumArr.sort()[sumArr.length - 1]);
}
