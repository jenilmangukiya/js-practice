const array = [1, 2, 3, [3, 4, 5, [1, 2, 3, [9, 8, 7]]], [0, 1, 0], [1, 2]];
// const array = [1, 2, [1, 2, [7, 8]], [9, 10]];

function flat(array, deep) {
  const temp = [];
  if (deep == 0) {
    return array;
  }
  array.forEach((element, index) => {
    if (Array.isArray(element)) {
      temp.push(...flat(element, deep - 1));
    } else {
      temp.push(element);
    }
  });
  return temp;
}

console.log(flat(array, 10));
