let a = 5;
let b = 3;

let result = a & b; //  二进制: 0001
console.log(result);

let result2 = a || b;
console.log(result2); //5

// . 按位异或（^）
let result3 = a ^ b;
console.log(result3); //6

let result4 = ~a;
console.log(result4);

let result5 = a << 1;
console.log(result5);

let result6 = a >> 1;
console.log(result6);

let a2 = -5; // 二进制: 11111111111111111111111111111011 (32位补码表示)
let result7 = a2 >>> 1; // 二进制: 01111111111111111111111111111101

console.log(result7); // 2147483645

