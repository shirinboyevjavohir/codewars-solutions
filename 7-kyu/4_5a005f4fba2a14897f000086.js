const sumItUp = (numbersWithBases) =>
  numbersWithBases.reduce(
    (sum, value) => (sum += parseInt(value[0], value[1])),
    0,
  );

console.log(
  sumItUp([
    ["101", 2],
    ["10", 8],
  ]),
);
