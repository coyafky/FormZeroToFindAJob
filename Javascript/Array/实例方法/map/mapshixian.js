Array.prototype.myMap = function (callback, thisArg) {
  // 创建新数组
  let result = [];
  
  // 遍历原数组
  for (let i = 0; i < this.length; i++) {
    // 获取当前元素
    let currentElement = this[i];
    
    // 调用 callback 函数
    let mappedValue;
    if (thisArg !== undefined) {
      mappedValue = callback.call(thisArg, currentElement, i, this);
    } else {
      mappedValue = callback(currentElement, i, this);
    }
    
    // 将映射结果添加到新数组中
    result.push(mappedValue);
  }
  
  // 返回新数组
  return result;
};

let arr = [1, 2, 3];
let mappedArr = arr.myMap(x => x * 2);
console.log(mappedArr); // 输出: [2, 4, 6]