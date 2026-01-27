const isAnagram = (test, original) => {
  test = test.toLowerCase();
  original = original.toLowerCase();

  if (test.length !== original.length) return false;

  for (el of original) {
    if (!test.includes(el)) return false;
  }

  for (el of test) {
    if (!original.includes(el)) return false;
  }

  return true;
};

console.log(isAnagram("apple", "pale"));
