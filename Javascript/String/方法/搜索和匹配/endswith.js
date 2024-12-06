let str = 'Hello world';

console.log(str.endsWith('world')); // true
console.log(str.endsWith('Hello')); // false
console.log(str.endsWith('orl', 10)); //true (检查长度为10的子串的结尾)
console.log(str.endsWith('wor', 10)); //true
