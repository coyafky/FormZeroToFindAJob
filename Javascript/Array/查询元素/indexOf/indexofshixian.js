Array.prototype.myIndexOf = function (searchElement, formIndex = 0) {
  for (let i = formIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }

  return -1;
};

let arr = [1, 2, 3, 4, 5];
let index = arr.myIndexOf(3);
console.log(index); // 输出: 2
