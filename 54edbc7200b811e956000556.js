const countSheeps = (sheep) =>
  sheep.reduce((count, sheep) => (count += sheep ? 1 : 0), 0);

console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined], 1)
);
