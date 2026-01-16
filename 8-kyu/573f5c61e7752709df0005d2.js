const mergeArrays = (...args) => {
  let newSet = new Set([...args].flat().sort((a, b) => a - b));
  return [...newSet];
};

console.log(mergeArrays([1, 3, 5, 5], [2, 4, 6, 3, 3]));
