const countSheep = (num) =>
  Array.from({ length: num }, (_, index) => index + 1).reduce(
    (result, count) => (result += `${count} sheep...`),
    ""
  );

console.log(countSheep(3));
