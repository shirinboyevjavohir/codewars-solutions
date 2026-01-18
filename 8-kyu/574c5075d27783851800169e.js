const animals = (heads, legs) => {
  let cows = (legs - 2 * heads) / 2;
  let chickens = heads - cows;
  if (chickens <= 0 || cows <= 0) return "No solutions";
  if (!Number.isInteger(chickens) || !Number.isInteger(cows))
    return "No solutions";
  return [chickens, cows];
};

console.log(animals(72, 201));
