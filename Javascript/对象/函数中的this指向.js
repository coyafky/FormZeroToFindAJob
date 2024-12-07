// 第一种是普通函数调用

function foo(name, age) {
  console.log(arguments);
  console.log(this); // <ref *1> Object [global] {
}

foo('coyan', 18);
// 当一个函数被普通调用时，this 指向全局对象（在浏览器中是 Window 对象

// 第二种是对象方法调用
let obj = {
  name: 'coya',
  age: 18,
  foo: function () {
    console.log(this); // { name: 'coya', age: 18, foo: [Function: foo] }
  },
};

obj.foo();
// 解释：当一个函数作为对象的方法被调用时，this 指向调用该方法的对象（即 obj

// 对象方法调用（函数声明）
// function bar() {
//   console.log(this); // { name: 'why', bar: [Function: bar] }
// }
// var obj = {
//   name: "why",
//   bar: bar
// };
// obj.bar(); // bar 函数作为 obj 对象的方法被调用，因此 this 指向 obj 对象

// 对象方法调用（函数表达式）

let bar = function () {
  console.log(this); // { name: 'why', bar: [Function: bar] }
};

let obj2 = {
  name: 'why',
  bar: bar,
};
obj2.bar(); // { name: 'why', bar: [Function: bar] }

// 对象方法调用（箭头函数）

let bar2 = () => {
  console.log(this); // { name: 'why', bar: [Function: bar] }
};

let obj3 = {
  name: 'why',
  bar: bar2,
};
obj3.bar(); // {}

// 构造函数调用
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this); // { name: 'why', age: 18 }
}
let p = new Person('why', 18);

// 箭头函数调用
let Person2 = (name, age) => {
  this.name = name;
  this.age = age;
  console.log(this); // { name: 'why', age: 18 }
};
let p2 = new Person2('why', 18);
