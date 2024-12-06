Array.prototype.myPop = function () {
  if (this.length === 0) {
    return undefined;
  }

  let lastElement = this[this.length - 1];
  this.length--;
  return lastElement;
};

let arr = [1, 2, 3, 4, 5];
let popElement = arr.myPop();
console.log(popElement); // 输出: 5
console.log(arr); // 输出: [1, 2, 3, 4]
