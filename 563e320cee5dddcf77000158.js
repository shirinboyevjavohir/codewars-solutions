const getAverage = (marks) =>
  Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);

console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
