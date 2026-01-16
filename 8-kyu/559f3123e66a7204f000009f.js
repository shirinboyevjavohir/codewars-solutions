const arrowFunc = (arr) =>
  arr.reduce((str, code) => str + String.fromCharCode(code), "");

console.log(arrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]));
