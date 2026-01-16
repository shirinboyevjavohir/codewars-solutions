const differenceInAges = (ages) => {
  let maxEle = Math.max(...ages);
  let minEle = Math.min(...ages);
  return [minEle, maxEle, maxEle - minEle];
};
