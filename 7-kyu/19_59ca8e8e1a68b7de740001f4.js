// function solve(a, b) {
//   let newArr = [];
//   for (let el of b) {
//     newArr.push(a.reduce((a, b) => (a += b === el ? 1 : 0), 0));
//   }

//   return newArr;
// }

function solve(a, b) {
  const count = {};

  for (const el of a) {
    count[el] = (count[el] || 0) + 1;
  }

  return b.map((element) => count[element] || 0);
}

console.log(solve(["abc", "abc", "xyz", "abcd", "cde"], ["abc", "cde", "uap"]));
