function solution(first, second) {
  let arr = [first, second];
  while (arr[1] - arr[0] <= arr[0]) {
    arr.unshift(arr[1] - arr[0]);
  }

  return [arr[0], arr[1]];
}

console.log(solution(15, 28));
