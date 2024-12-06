let str = 'Hello World';
console.log(str.includes('World')); // true
console.log(str.includes('Hello')); // true
console.log(str.includes('World', 6)); // false
console.log(str.includes('Javascript')); // false
console.log(str.includes('o')); // true
console.log(str.includes('o', 8)); // false
