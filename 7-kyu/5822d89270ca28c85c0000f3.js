const scramble = (str, arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = str[i];
  }

  return result.join("");
};

console.log(scramble("abcd", [0, 3, 1, 2]));

// result[0] = arr[0] = a
// result[3] = arr[1] = b;
// result[1] = arr[2] = c;
// result[2] = arr[3] = d;
//  acdb;
