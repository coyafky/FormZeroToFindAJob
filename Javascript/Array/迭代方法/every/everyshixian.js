Array.prototype.myEvery = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (!callback.call(thisArg, this[i], i, this)) {
      return false;
    }
  }
  return true;
};

let arr = [2, 4, 6, 8];
let alleven = arr.myEvery((x) => x % 2 === 0);
console.log(alleven);
