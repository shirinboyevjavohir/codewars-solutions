const doubleChar = (str) =>
  [...str].reduce((result, char) => (result += char + char), "");
