/*
Sort by Length!

Given an array of Strings,  sort them in the order of increasing lengths. 
If two strings have the same length,
their relative order must be the same as in the initial array. 
Example 
  - For inputArray = ["abc", "", "a","aaa","zz"];
  The output shold be 
  sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"];    
*/

function sortByLength(strs) {
  return strs.sort((a, b) => a.length - b.length);
}
