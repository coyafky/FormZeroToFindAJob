Array.prototype.myfilter = function (callback, thisArg) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.myfilter((x) => x % 2 === 0);
console.log(filteredArr); // 输出: [2, 4]
