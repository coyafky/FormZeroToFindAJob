Array.prototype.mySort = function (compareFunction) {
  let len = this.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (
        compareFunction
          ? compareFunction(this[j], this[j + 1]) > 0
          : String(this[j]) > String(this[j + 1])
      ) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }

  return this;
};

let arr = [3, 1, 4, 1, 5, 9];
arr.mySort();
console.log(arr); // 输出: [1, 1, 3, 4, 5, 9]
