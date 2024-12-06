Array.prototype.myfill = function (value, start = 0, end = this.length) {
  if (start < 0) {
    start = Math.max(0, start + this.length);
  }

  if (end < 0) {
    end = Math.max(0, end + this.length);
  }

  if (end > this.length) {
    end = this.length;
  }

  for (let i = start; i < end; i++) {
    this[i] = value;
  }

  return this;
};

let arr = [1, 2, 3, 4, 5];
let fillElement = arr.myfill(0, 1, 3);
console.log(fillElement); // 输出: [1, 0, 0, 4, 5]
console.log(arr); // 输出: [1, 0, 0, 4, 5]
