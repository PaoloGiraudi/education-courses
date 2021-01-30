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
