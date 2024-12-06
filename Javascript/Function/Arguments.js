
// 定义函数，接受两个参数（name和age是形式参数）
function greet(name, age) {
  console.log('Hello, ' + name + '!');
  console.log('You are ' + age + ' years old.');
}


// 函数调用，传递实际参数 "Alice" 和 30
greet('Alice', 30);

let username = 'Bob';
let age = 25;
// 函数调用，传递变量作为实际参数
greet(username, age);
