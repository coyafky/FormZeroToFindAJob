// number.toFixed(digits)
// number: 要格式化的数字。
// digits: 小数点后要保留的位数 (0 到 20 之间)。 如果省略此参数，则默认为 0。

let num1 = 123.456;
let num2 = 123.4;
let num3 = 123;
let num4 = 123.999;
let num5 = -123.456;
console.log(num1.toFixed(0)); // "123"
console.log(num1.toFixed(1)); // "123.5"
console.log(num1.toFixed(2)); // "123.46"
console.log(num1.toFixed(3)); // "123.456"

console.log(num2.toFixed(0)); // "123"
console.log(num2.toFixed(1)); // "123.4"
console.log(num2.toFixed(2)); // "123.40"

console.log(num3.toFixed(0)); // "123"
console.log(num3.toFixed(1)); // "123.0"

console.log(num4.toFixed(0)); // "124"
console.log(num4.toFixed(1)); // "124.0"
console.log(num4.toFixed(2)); // "124.00"

console.log(num5.toFixed(2)); // "-123.46
