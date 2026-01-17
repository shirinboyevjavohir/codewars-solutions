// function drawStairs(n) {
//   let space = "";
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str += i !== n ? space + "I\n" : space + "I";
//     space += " ";
//   }
//   return str;
// }

const drawStairs = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += " ".repeat(i) + "I";
    if (i < n - 1) result += "\n";
  }
  return result;
};

console.log(drawStairs(2));
