let a = 5; // 二进制: 0101
let b = 3; // 二进制: 0011

// 按位与
let andResult = a & b; // 二进制: 0001
console.log('按位与: ' + andResult); // 1

// 按位或
let orResult = a | b; // 二进制: 0111
console.log('按位或: ' + orResult); // 7

// 按位异或
let xorResult = a ^ b; // 二进制: 0110
console.log('按位异或: ' + xorResult); // 6

// 按位非
let notResult = ~a; // 二进制: 1010 (补码表示)
console.log('按位非: ' + notResult); // -6

// 左移
let leftShiftResult = a << 1; // 二进制: 1010
console.log('左移: ' + leftShiftResult); // 10

// 右移
let rightShiftResult = a >> 1; // 二进制: 0010
console.log('右移: ' + rightShiftResult); // 2

// 无符号右移
let unsignedRightShiftResult = -5 >>> 1; // 二进制: 01111111111111111111111111111101
console.log('无符号右移: ' + unsignedRightShiftResult); // 214748364
