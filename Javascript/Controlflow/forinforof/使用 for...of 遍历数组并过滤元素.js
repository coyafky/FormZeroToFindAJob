function flitterArray(arr, condition) {
  const result = [];
  for (let element of arr) {
    if (condition(element)) {
      result.push(element);
    }
  }
  return result;
}

// 示例用法
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 过滤出偶数
const evenNumbers = flitterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);
