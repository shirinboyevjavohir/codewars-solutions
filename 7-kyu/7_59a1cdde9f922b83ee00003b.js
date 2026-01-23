const stantonMeasure = (a) => {
  //   let count = a.filter((i) => i === 1).length; // O(n). //💾 Memory: yangi arraylar yaratiladi
  //   return a.filter((i) => i === count).length; // O(n)
  //   // O(n) + O(n) = O(n)

  //   const count = {}; 💾 Memory: Object saqlanadi

  //   for (const i of a) {
  //     count[i] = (count[i] || 0) + 1;
  //   }

  //   return count[count[1] || 0];

  let ones = 0;
  let result = 0; // 💾 Memory: O(1)

  for (const i of a) {
    if (i === 1) ones++;
  }

  for (const i of a) {
    if (i === ones) result++;
  }

  return result;
};

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]));
