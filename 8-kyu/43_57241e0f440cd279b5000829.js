const sumMul = (n, m) => {
  if (n <= 0 || m <= 0) return "INVALID";
  let sum = 0;
  let step = n;
  while (step < m) {
    sum += step;
    step += n;
  }

  return sum;
};

console.log(sumMul(4, -7));
