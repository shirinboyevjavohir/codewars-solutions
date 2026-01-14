const sumOfDifferences = (arr) =>
  arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : 0;

console.log(sumOfDifferences([2, 1, 10]));
