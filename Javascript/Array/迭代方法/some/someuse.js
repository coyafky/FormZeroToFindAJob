let arr = [1, 2, 3, 4, 5];
let haseven = arr.some((x) => x % 2 === 0);
console.log(haseven);

let users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];
let hasYoungUser = users.some(user => user.age < 30);
console.log(hasYoungUser); // 输出: true

let strings = ['hello', '', 'world'];
let hasEmptyString = strings.some(str => str === '');
console.log(hasEmptyString); // 输出: true