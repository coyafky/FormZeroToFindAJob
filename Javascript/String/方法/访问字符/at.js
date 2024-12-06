let str = 'hello world';

console.log(str.at(0));
console.log(str.at(1));
console.log(str.at(str.length)); //undefined
console.log(str.at(100)); //undefined

console.log(str.at(-1));
console.log(str.at(-2));
