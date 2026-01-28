const closeCompare = (a, b, margin = 0) => {
  if (Math.abs(a - b) <= margin) return 0;

  return a > b ? 1 : -1;
};

console.log(closeCompare(1.99, 5, 3));
