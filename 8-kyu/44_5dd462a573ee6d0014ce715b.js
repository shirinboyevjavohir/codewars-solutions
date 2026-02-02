const sameCase = (a, b) => {
  if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) return -1;

  const bothUpper = a === a.toUpperCase() && b === b.toUpperCase();
  const bothLower = a === a.toLowerCase() && b === b.toLowerCase();

  if (bothUpper || bothLower) return 1;

  return 0;
};

console.log(sameCase("a", "B"));

//  A - Z = 65 - 90
//  a - z = 97 - 122
//  0 - 9 = 48 - 57
