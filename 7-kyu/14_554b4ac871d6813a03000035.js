// const highAndLow = (numbers) => {
//   let num = numbers
//     .split(" ")
//     .map((item) => Number(item))
//     .sort((a, b) => a - b);
//   return num.at(-1) + " " + num[0];
// };

const highAndLow = (numbers) => {
  let n = numbers.split(" ").map(Number);
  let min = n[0];
  let max = n[0];

  for (let i = 1; i < n.length; i++) {
    if (min > n[i]) min = n[i];
    if (max < n[i]) max = n[i];
  }

  return `${max} ${min}`;
};

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
