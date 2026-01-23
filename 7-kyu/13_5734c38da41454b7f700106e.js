const onlyOne = (...arg) =>
  arg.reduce((a, b) => (a += b === true ? 1 : 0), 0) === 1;

console.log(onlyOne(false, true, true));
