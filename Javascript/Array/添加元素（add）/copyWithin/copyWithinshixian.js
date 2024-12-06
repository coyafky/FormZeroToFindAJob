Array.prototype.myCopyWithin = function (target, start = 0, end = this.length) {
  // 检查参数
  if (target < 0) {
    target = Math.max(this.length + target, 0);
  }
  if (start < 0) {
    start = Math.max(this.length + start, 0);
  }
  if (end < 0) {
    end = Math.max(this.length + end, 0);
  }
  if (end > this.length) {
    end = this.length;
  }

  // 复制元素
  for (let i = start; i < end; i++) {
    this[target + i - start] = this[i];
  }

  // 返回结果
  return this;
};

let arr = [1, 2, 3, 4, 5];
arr.myCopyWithin(0, 3, 5);
console.log(arr); // 输出: [4, 5, 3, 4, 5]
