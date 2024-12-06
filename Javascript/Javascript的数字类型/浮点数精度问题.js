let a = 0.1;
let b = 0.2;
let sum = a + b;
console.log(sum); // 0.30000000000000004

// 解决 使用 toFixed() 方法将结果四舍五入到指定的小数位数

let sum2 = (a + b).toFixed(3);
console.log(sum2);
