const countBy = (x, n) =>
  Array.from({ length: n }, (_, index) => (index + 1) * x);

console.log(countBy(2, 5));
