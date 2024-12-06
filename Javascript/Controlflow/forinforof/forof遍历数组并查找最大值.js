function findMaxValue(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let max = arr[0];

  for (let value of arr) {
    if (value > max) {
      max = value;
    }
  }
  return max;
}

// 测试用例
console.log(findMaxValue([1, 2, 3, 4, 5])); // 5
console.log(findMaxValue([-1, -2, -3, -4, -5])); // -1
