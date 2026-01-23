function crap(x, bags, cap) {
  const arr = x.flat();
  if (arr.includes("D")) return "Dog!!";
  return arr.filter((char) => char === "@").length > bags * cap
    ? "Cr@p"
    : "Clean";
}

console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "@", "@", "_"],
    ],
    1,
    2
  )
);
