const digitize = (n) => {
  return (n + "").split("").reverse().map(Number);
};

console.log(digitize(12345));
