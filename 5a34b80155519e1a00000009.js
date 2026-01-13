const multipleOfIndex = (array) =>
  array.filter(
    (item, index) => (item == 0 && index == 0) || item % index === 0
  );

console.log(multipleOfIndex([0, 2, 3, 6, 9]));
