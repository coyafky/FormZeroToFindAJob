Array.prototype.myPush = function (...args) {
  //  ...args 是剩余参数语法，它允许函数接受任意数量的参数，并将这些参数收集到一个数组中

  for (let i = 0; i < args.length; i++) {
    // for 循环遍历 args 数组中的每个元素

    this[this.length] = args[i];
    // this[this.length] 表示是当前数组的长度，表示数组的下一个空位的知识 args[i]
  }
  // 返回新长度
  return this.length;
};

let arr = [1, 2, 3];
let newLength = arr.myPush(4, 5, 6);
console.log(arr);
console.log(newLength);
