const consecutive = (array) => {
  const len = array.length;
  return len ? Math.max(...array) - Math.min(...array) - array.length + 1 : 0;
};

console.log(consecutive([4, 5, 9, 6, 8]));
