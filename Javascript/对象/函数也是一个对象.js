// 定义原始类型的变量 是在栈中存储的

// 定义引用类型的变量 是在堆中存储的
// 栈中存储的是变量的标识符和变量的值  而堆中存储的是对象的属性和方法

let name = 'coyan';
let age = 18;

let foo = function () {};
function bar() {}
console.log(typeof foo);
console.log(typeof bar);

// 定义一个对象
let student = new Object();

student.name = 'coyan';

student['age'] = 18;
console.log(student);

let info = {};
info.name = 'coyan';

function sayHello() {
  console.log('hello');
}
// 给函数添加属性   函数也是一个对象
sayHello.age = 18;
console.log(sayHello);

function Dog() {}
Dog.running = function () {
  console.log('running');
};
console.log(Dog.running);
Dog.running();

// 数组是存储在栈中还是堆中
let arr = [1, 2, 3];
console.log(typeof arr); // object


