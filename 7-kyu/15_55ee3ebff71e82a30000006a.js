const titleToNumber = (title) => {
  const CHAR_CODE_OFFSET = 64;
  const BASE = 26;

  let columnNumber = title.at(-1).charCodeAt() - CHAR_CODE_OFFSET;

  for (let index = 0; index < title.length - 1; index++) {
    columnNumber +=
      Math.pow(BASE, title.length - 1 - index) *
      (title[index].charCodeAt() - CHAR_CODE_OFFSET);
  }

  return columnNumber;
};

console.log(titleToNumber("CODEWARS"));
