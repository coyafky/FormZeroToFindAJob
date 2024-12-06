Array.prototype.myForEach = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};

let arr = [1, 2, 3];
arr.forEach((x) => console.log(x));
