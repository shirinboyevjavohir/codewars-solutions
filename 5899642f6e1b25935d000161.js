const mergeArrays = (arr1, arr2) => {
  let newSet = new Set(arr1.concat(arr2));
  return [...newSet].sort((a, b) => a - b);
};

console.log(mergeArrays([1, 2, 3, 4], [6, 7, 8, 2, 5]));
