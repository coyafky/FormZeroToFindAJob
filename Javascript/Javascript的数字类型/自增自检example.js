let x = 10;
let y = 10;

// 前缀自增和自减
let prefixIncrementResult = ++x; // x 先增加到 11，然后返回 11
let prefixDecrementResult = --y; // y 先减少到 9，然后返回 9

console.log('前缀自增结果: ' + prefixIncrementResult); // 11
console.log('前缀自减结果: ' + prefixDecrementResult); // 9
console.log('x 的值: ' + x); // 11
console.log('y 的值: ' + y); // 9

// 后缀自增和自减
let postfixIncrementResult = x++; // 先返回 11，然后 x 增加到 12
let postfixDecrementResult = y--; // 先返回 9，然后 y 减少到 8

console.log('后缀自增结果: ' + postfixIncrementResult); // 11
console.log('后缀自减结果: ' + postfixDecrementResult); // 9
console.log('x 的值: ' + x); // 12
console.log('y 的值: ' + y); // 8
