// 基本数据类型
var message = 'Hello World';
var words = message.split(' ');
var length = message.length;

// 包装类型对象
var num = 2.54432;
num = num.toFixed(2);

// 基本数据类型与包装类型对象的区别
var name1 = 'why';
var name2 = new String('why');
console.log(typeof name1); // string
console.log(typeof name2); // object
console.log(name1 === name2); // false

// 包装类型对象的属性
console.log(Number.MAX_VALUE);

// 基本数据类型的方法调用
console.log((123).toString(2));

// 字符串方法调用
var message = 'Hello World';
console.log(message.toLowerCase()); // hello world
console.log(message.toUpperCase()); // HELLO WORLD

// 函数作为参数传递
function foo(fn) {
  fn();
}
function bar() {
  console.log('我是bar函数被调用');
}
foo(bar);
