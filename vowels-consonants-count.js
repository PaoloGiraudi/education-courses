/*
Count Vowel Consonant. 

You are given a string s that consists of only lowercase English letters.
If vowels('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are given a value of 2, 
return the sum of all of the letteres in the input string. 

Example
 For s = "abcde", the output sholud be countVowelConsonant(s) = 8.
*/

function countVowelConsonant(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    vowels.includes(arr[i]) ? (count += 1) : (count += 2);
  }

  return count;
}
