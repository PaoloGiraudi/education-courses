/*
Implement your own mapping function using reduce()

map([1,2,3], (v) => v + 1) should return [2,3,4]
*/

const map = (array, callback) => {
  return array.reduce((acc, value) => {
    return [...acc, callback(value)];
  }, []);
};

console.log(map([1, 2, 3], (v) => v + 1)); // [2,3,4]
