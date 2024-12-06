let arr = [3, 1, 4, 1, 5, 9];
arr.sort();
console.log(arr); // 输出: [1, 1, 3, 4, 5, 9]

let strings = ['banana', 'apple', 'cherry'];
strings.sort();
console.log(strings); // 输出: ['apple',

let users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];
users.sort((a, b) => a.age - b.age);
console.log(users);
// 输出: [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]
