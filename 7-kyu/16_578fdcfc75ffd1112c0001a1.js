// const binRota = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       for (let j = 0; j < arr[i].length; j++) newArr.push(arr[i][j]);
//     } else {
//       for (let j = arr[i].length - 1; j >= 0; j--) newArr.push(arr[i][j]);
//     }
//   }

//   return newArr;
// };

const binRota = (arr) =>
  arr.reduce((res, row, i) => {
    return res.concat(i % 2 === 0 ? row : [...row].reverse());
  }, []);

console.log(
  binRota([
    ["Bob", "Nora"],
    ["Ruby", "Carl"],
  ]),
);
