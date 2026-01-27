const array = (string) => {
  let arr = [];
  arr = string.split(",");
  if (arr.length <= 2) return null;
  return arr.slice(1, -1).join(" ");
};

console.log(array("1,2,3,4"));
