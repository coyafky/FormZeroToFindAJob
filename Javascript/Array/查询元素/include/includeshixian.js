Array.prototype.myIncludes = function (searchElement, formIndex) {
  for (let i = formIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return true;
    }
  }

  return false;
};

let arr = [1, 2, 3, 4, 5];
let includesElement = arr.myIncludes(3);
console.log(includesElement); // 输出: true
