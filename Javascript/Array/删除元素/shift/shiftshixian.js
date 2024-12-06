Array.prototype.myshift = function () {
  if (this.length === 0) {
    return undefined;
  }
  let firstElement = this[0];
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  this.length--;
  return firstElement;
};

let arr = [1, 2, 3, 4, 5];
let shiftElement = arr.myshift();
console.log(shiftElement); // 输出: 1
console.log(arr); // 输出: [2, 3, 4, 5]

