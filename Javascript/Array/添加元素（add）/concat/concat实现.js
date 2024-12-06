Array.prototype.myConcat = function (...args) {
  //...args 是剩余参数语法，它允许函数接受任意数量的参数，并将这些参数收集到一个数组中
  let result = [];
  // 创建一个空数组，用于存储合并后的结果

  for (let i = 0; i <= this.length - 1; i++) {
    result.push(this[i]);
  }

  for (let i = 0; i < args.length; i++) {
    // for 循环遍历 args 数组中的每个元素

    // 检测当前元素是否为数组。如果是数组，使用嵌套的 for 循环遍历该数组中的每个元素，并将它们逐个添加到 result 数组中。
    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j++) {
        result.push(args[i][j]);
      }
    } else {
      // 如果当前元素不是数组，直接将其添加到 result 数组中。
      result.push(args[i]);
    }
  }

  return result;
};

// 示例用法
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let obj = { key: 'value' };
let num = 7;
let str = 'hello';

let newArr = arr1.myConcat(arr2, obj, num, str);

console.log(newArr); // 输出 [1, 2, 3, 4, 5, 6, { key: 'value' }, 7, 'hello']
