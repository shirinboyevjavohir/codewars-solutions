// const twoSort = (s) =>
//   [...s.sort()[0]].reduce(
//     (str, item, index, arr) =>
//       (str += index !== arr.length - 1 ? item + "***" : item),
//     "",
//   );

const twoSort = (s) => s.sort()[0].split("").join("***");

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ]),
);
