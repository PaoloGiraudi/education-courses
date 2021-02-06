/*
Implement isIsogram(). Isogram is a string in which all letters of 
the string are present only once.
*/

const isIsogram = (string) => {
  const lowerCased = string.toLowerCase();

  const result = lowerCased
    .split("")
    .every((value, index) => lowerCased.indexOf(value) === index);

  return result;
};

console.log(isIsogram("ambidExtRously")); // true
console.log(isIsogram("patteRN")); // false
