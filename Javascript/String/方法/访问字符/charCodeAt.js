let str = 'hello world';
console.log(str.charCodeAt(0)); //104
console.log(str.charCodeAt(1)); //101
console.log(str.charCodeAt(str.length)); // NaN

console.log(str.charCodeAt(100)); // NaN

console.log(str.charCodeAt(str.length - 1)); // 100
