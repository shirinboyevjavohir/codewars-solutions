const between = (a, b) =>
  Array.from({ length: b - a + 1 }, (_, index) => a + index);

console.log(between(2, 8));
