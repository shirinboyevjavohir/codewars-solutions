const defineSuit = (card) => {
  const cardName = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  };
  const icon = card.split("").at(-1);
  return cardName[icon];
};

console.log(defineSuit("Q♠"));
