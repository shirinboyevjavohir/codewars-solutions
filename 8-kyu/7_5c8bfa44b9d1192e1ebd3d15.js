const warnTheSheep = (queue) => {
  const def = queue.length - 1 - queue.indexOf("wolf");
  return def > 0
    ? `Oi! Sheep number ${def}! You are about to be eaten by a wolf!`
    : `Pls go away and stop eating my sheep`;
};

console.log(
  warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"])
);
