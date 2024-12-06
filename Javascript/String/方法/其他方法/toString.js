console.log((123).toString()); // "123"
console.log(true.toString()); // "true"
console.log(false.toString()); // "false"
console.log(123n.toString()); // "123" (BigInt)
console.log(Symbol('foo').toString()); // "Symbol(foo)"

// 对象
console.log({}.toString()); // "[object Object]"
console.log([1, 2, 3].toString()); // "1,2,3"
console.log(new Date().toString()); // "Sun Nov 18 2023 11:01:02 GMT+0800 (中国标准时间)"
