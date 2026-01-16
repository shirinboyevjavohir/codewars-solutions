const divisibleBy = (numbers, divisor) =>
  numbers.filter((item) => item % divisor === 0);

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
