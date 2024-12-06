console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

let a = true;
let b = false;

// 逻辑与
console.log('逻辑与: ' + (a && b)); // false
console.log('逻辑与: ' + (a && true)); // true

// 逻辑或
console.log('逻辑或: ' + (a || b)); // true
console.log('逻辑或: ' + (b || false)); // false

// 逻辑非
console.log('逻辑非: ' + !a); // false
console.log('逻辑非: ' + !b); // true

// 逻辑运算符还具有短路求值的特性：

// 逻辑与（&&）：如果第一个表达式为 false，则不再计算第二个表达式，直接返回 false。
// 逻辑或（||）：如果第一个表达式为 true，则不再计算第二个表达式，直接返回 true。

let x = 10;
let y = 0;

// 逻辑与的短路求值
console.log(y > 0 && x / y > 2); // false，因为 y > 0 为 false，不再计算 x / y > 2

// 逻辑或的短路求值
console.log(x > 0 || y / x > 2); // true，因为 x > 0 为 true，不再计算 y / x > 2
