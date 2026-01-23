const digits = (n) => String(n).length;

// const digits = (n) => {
//   if (n === 0) return 1;
//   let count = 0;
//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }

//   return count;
// };

console.log(digits(12345));
