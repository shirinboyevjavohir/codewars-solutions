const solution = (str) => {
  str += str.length % 2 === 0 ? "" : "_";
  let arr = [];
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str.substring(i, i + 2));
  }

  return arr;
};

console.log(solution("abcdefa_"));
