/*
Implement toRainLanguage()

- if the number has 3 as a factor, output 'Pling'
- if the number has 5 as a factor, output 'Plang'
- if the number has 7 as a factor, output 'Plong'
- return the number in all other cases
*/

const toRainLanguage = (number) => {
  let result = "";

  if (number % 3 !== 0 && number % 5 !== 0 && number % 7 != 0) result = number;

  if (number % 3 === 0) result += "Pling";

  if (number % 5 === 0) result += "Plang";

  if (number % 7 === 0) result += "Plong";

  return result;
};

console.log(toRainLanguage(3));
console.log(toRainLanguage(21));
console.log(toRainLanguage(35));
console.log(toRainLanguage(1));
