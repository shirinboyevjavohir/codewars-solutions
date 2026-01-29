// const isAnagram = (test, original) => {
//   test = test.toLowerCase().split("").sort().join("");
//   original = original.toLowerCase().split("").sort().join("");

//   return original == test;
// };

const isAnagram = (test, original) => {
  test = test.toLowerCase();
  original = original.toLowerCase();

  if (test.length !== original.length) return false;

  const obj = {};

  for (const ch of test) obj[ch] = (obj[ch] || 0) + 1;
  for (const ch of original) {
    if (!obj[ch]) return false;

    obj[ch]--;
  }

  return true;
};

module.exports = isAnagram;
