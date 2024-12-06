Array.prototype.myUnshift = function(...args) {
  // 将现有元素向右移动
  for (let i = this.length - 1; i >= 0; i--) {
      this[i + args.length] = this[i];
  }
  
  // 插入新元素
  for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
  }
  
  // 返回新长度
  return this.length;
};

let arr = [1, 2, 3];
let newLength = arr.myUnshift(0);
console.log(arr); // 输出: [0, 1, 2, 3]
console.log(newLength); // 输出: 4