// const findLongest = (array) => {
//   const len = String(Math.max(...array)).length;
//   return array.filter((item) => String(item).length === len)[0];
// };

const findLongest = (array) =>
  array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));

console.log(findLongest([8, 900, 500]));
