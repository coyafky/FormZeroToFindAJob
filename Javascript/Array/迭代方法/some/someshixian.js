Array.prototype.mySome = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};
let arr = [1, 2, 3, 4, 5];
let hasEven = arr.mySome((x) => x % 2 === 0);
console.log(hasEven); // 输出: true
