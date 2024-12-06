let arr = [1, 2, 3, 4, 5];
let index = arr.findIndex((x) => x > 3);
console.log(index); // 输出: 3

let users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];
let index2 = users.findIndex((user) => user.age > 30);
console.log(index2); // 输出: 2
