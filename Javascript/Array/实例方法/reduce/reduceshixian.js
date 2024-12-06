Array.prototype.myReduce = function (callback, initialValue) {
  // 初始化累加器
  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    if (this.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = this[0];
    startIndex = 1;
  }

  // 遍历数组
  for (let i = startIndex; i < this.length; i++) {
    // 获取当前元素
    let currentElement = this[i];

    // 调用 callback 函数
    let newAccumulator;
    if (initialValue !== undefined) {
      newAccumulator = callback(accumulator, currentElement, i, this);
    } else {
      newAccumulator = callback(accumulator, currentElement, i, this);
    }

    // 更新累加器
    accumulator = newAccumulator;
  }

  // 返回最终结果
  return accumulator;
};

let arr = [1, 2, 3, 4];
let sum = arr.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // 输出: 10
