Array.prototype.myFindIndex = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }

  return -1;
};

let arr = [1, 2, 3, 4, 5];
let findIndexElement = arr.myFindIndex((x) => x > 3);
console.log(findIndexElement); // 输出: 3
