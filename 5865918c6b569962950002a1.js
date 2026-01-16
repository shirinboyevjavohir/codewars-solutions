// const strCount = (str, letter) =>
//   (str.match(new RegExp(letter, "g")) || []).length;

const strCount = (str, letter) =>
  [...str].filter((char) => char === letter).length;

console.log(strCount("Hollo", "o"));
