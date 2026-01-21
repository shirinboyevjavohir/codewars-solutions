// const matrix = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (j = 0; j < array[i].length; j++) {
//       if (i === j && array[i][j] < 0) {
//         array[i][j] = 0;
//       } else if (i === j && array[i][j] >= 0) {
//         array[i][j] = 1;
//       }
//     }
//   }
//   return array;
// };

const matrix = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i][i] = array[i][i] >= 0 ? 1 : 0;
  }
  return array;
};

console.log(
  matrix([
    [-1, 4, -5, -9, 3],
    [6, -4, -7, 4, -5],
    [3, 5, 4, -9, -1],
    [1, 5, -7, -8, -9],
    [-3, 2, 1, -5, 6],
  ]),
);
