const fakeBin = (x) => [...x].reduce((a, b) => (a += b >= "5" ? "1" : "0"), "");

console.log(fakeBin("45385593107843568"));
