Array.prototype.myFind = function (callback, thisArg) {
  // 检查回调函数是否为函数
  if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }
  // 遍历数组
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
let arr = [1, 2, 3, 4, 5];
let found = arr.myFind((x) => x > 3);
console.log(found); // 输出: 4

let found2 = arr.myFind(x);
console.log(found2); // 输出: undefined
