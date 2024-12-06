Array.prototype.mySlice = function (start = 0, end = this.length) {
  // 检查参数
  if (start < 0) {
    start = Math.max(this.length + start, 0);
  }
  if (end < 0) {
    end = Math.max(this.length + end, 0);
  }
  if (end > this.length) {
    end = this.length;
  }

  // 创建新数组
  let result = [];

  // 复制元素
  for (let i = start; i < end; i++) {
    result.push(this[i]);
  }

  // 返回新数组
  return result;
};

let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.mySlice(1, 4);
console.log(slicedArr); // 输出: [2, 3, 4]
console.log(arr); // 输出: [1, 2, 3, 4, 5]
