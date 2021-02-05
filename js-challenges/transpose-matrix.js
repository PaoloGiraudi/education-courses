/*
Implement a function which transposes a matrix array
*/

const transposeMatrix = (array) => {
  return array[0].map((_, i) => array.map((value) => value[i]));
};

console.log(
  transposeMatrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
);
// [[1,1,1],[2,2,2],[3,3,3]]
