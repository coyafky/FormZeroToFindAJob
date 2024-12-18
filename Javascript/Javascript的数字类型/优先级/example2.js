let x = 10;
let y = 3;
let z = 2;

// 示例 1: 默认优先级
let result1 = x + y * z; // 10 + (3 * 2) = 10 + 6 = 16
console.log(result1); // 16

// 示例 2: 使用括号改变优先级
let result2 = (x + y) * z; // (10 + 3) * 2 = 13 * 2 = 26
console.log(result2); // 26

// 示例 3: 复杂表达式
let result3 = x * y + z / y - (x % z); // (10 * 3) + (2 / 3) - (10 % 2) = 30 + 0.6666666666666666 - 0 = 30.666666666666664
console.log(result3); // 30.666666666666664

// 示例 4: 嵌套括号
let result4 = ((x + y) * z) / (x - y); // ((10 + 3) * 2) / (10 - 3) = (13 * 2) / 7 = 26 / 7 = 3.7142857142857144
console.log(result4); // 3.7142857142857144
