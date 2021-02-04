/*
Reverse A String!

Reverse the provided string. 
You may need to turn string into an array before you can reverse it. 
Your result must be a string.

Example
  - reverseAString('hello') returns 'olleh';
  - reverseAString('Howdy') returns 'ydwoH';    
*/

function reverseAString(str) {
  return str.split("").reverse().join("");
}
