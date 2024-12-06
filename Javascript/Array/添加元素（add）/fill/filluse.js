let arr = [1, 2, 3, 4, 5];

arr.fill(0, 1, 3); // 输出: [1, 0, 0, 4, 5]
console.log(arr);

// 初始化数组

let arr2 = new Array(5).fill(0);
console.log(arr2); // 输出: [0, 0, 0, 0, 0]

// 创建2维数组

let matrix = new Array(3).fill(null).map(() => new Array(3).fill(0));
console.log(matrix);
// 输出:
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]
