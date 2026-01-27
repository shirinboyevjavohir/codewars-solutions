const isPythagoreanTriple = (integers) => {
  integers.sort((a, b) => a - b);
  const [a, b, c] = integers;
  return a ** 2 + b ** 2 === c ** 2;
};

console.log(isPythagoreanTriple([6, 3, 4]));
