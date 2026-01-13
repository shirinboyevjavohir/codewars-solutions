const points = (games) => {
  return games.reduce((count, item) => {
    const [x, y] = item.split(":");
    return count + (x > y ? 3 : x === y ? 1 : 0);
  }, 0);
};

console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
