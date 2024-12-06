Array.prototype.myReverse = function () {
  let len = this.length;
  let mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    let temp = this[i];
    this[i] = this[len - 1 - i];
    this[len - i - 1] = temp;
  }

  return this;
};

let arr = [1, 2, 3, 4, 5];
arr.myReverse();
console.log(arr);
