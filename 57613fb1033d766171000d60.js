function uefaEuro2016(teams, scores) {
  const [a, b] = scores;
  return `At match ${teams[0]} - ${teams[1]}, ${
    a > b
      ? teams[0] + " won!"
      : b > a
      ? teams[1] + " won!"
      : "teams played draw."
  }`;
}
console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0]));
