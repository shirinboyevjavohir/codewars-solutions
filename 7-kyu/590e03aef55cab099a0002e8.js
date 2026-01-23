const incrementer = (nums) =>
  nums.map((item, index) => (item + index + 1) % 10);

// const incrementer = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = (nums[i] + i + 1) % 10;
//   }
//   return nums;
// };

console.log(incrementer([1, 2, 3, 9]));
