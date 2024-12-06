Array.prototype.myLastIndexOf = function (
  searchElement,
  formIndex = this.length - 1
) {
  for (let i = formIndex; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

let arr = [1, 2, 3, 4, 3, 5];
let index = arr.myLastIndexOf(3);
console.log(index); // 输出: 2
