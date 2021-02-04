/*
Write a function that splits an array (first argument) 
into groups the length of size (second argument) 
and returns them as a two-dimensional array, 

Example

- chunkyMonkey(['a','b','c','d'],2) should return[['a','b'],['c','d']].
- chunkyMonky([0,1,2,3,4,5],4) should return [[0,1,2,3],[4,5]].
*/


function chunkyMonkey(values, size) {
  const newArray = [];
  let count = 0;

  while (count < values.length) {
    let slice = values.slice(count, count + size);
    newArray.push(slice);
    count += size;
  }

  return newArray;
}
