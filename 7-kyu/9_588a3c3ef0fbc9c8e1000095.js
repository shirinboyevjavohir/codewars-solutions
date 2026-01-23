// const maxDiff = (list) => {
//   if (list.length <= 1) return 0;
//   return Math.max(...list) - Math.min(...list); // O(n) + O(n) = O(n)
// };

const maxDiff = (list) => {
  if (list.length <= 1) return 0;

  let min = list[0];
  let max = list[0];

  for (let i = 1; i < list.length; i++) {
    if (min > list[i]) min = list[i];
    if (max < list[i]) max = list[i];
  }

  return max - min;
};

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]));
