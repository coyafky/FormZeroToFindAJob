let arr = [1, 2, 3, 4, 5];
let includeelement = arr.includes(3);
console.log(includeelement); // 输出: true

// 检查数组中是否存在某个元素
let fruits = ['apple', 'banana', 'orange'];

let hasbanana = fruits.includes('banana');
console.log(hasbanana);

// 处理用户输入：在处理用户输入时，可以使用 includes 方法检查输入是否在允许的范围内。

let allowedCommands = ['start', 'stop', 'pause'];

let useInput = 'start';

if (allowedCommands.includes(useInput)) {
  console.log('Command accepted');
} else {
  console.log('Command rejected');
}

