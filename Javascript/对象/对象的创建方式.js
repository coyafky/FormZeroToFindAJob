// 使用对象子面量
var obj = {
  name: '张三',
  age: 20,
  sex: '男',
  sayHi: function () {
    console.log('hi');
  },
};
console.log(obj);

// 使用构造函数
// 如果一个函数被new关键字调用,那么这个函数就是构造函数
// 创建一个空对象
// 将构造函数的this指向这个空对象
// 执行构造函数中的代码
// 如果没有明确返回一个对象,那么返回这个空对象

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.sayHi = function () {
    console.log('hi');
  };
}

let coya = new Person('coyan', 18, '男');

console.log(coya);

// 使用工厂函数
function createPerson(name, age, sex) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.sex = sex;
  obj.sayHi = function () {
    console.log('hi');
  };
  return obj;
}
let coya1 = createPerson('coyan', 18, '男');
console.log(coya1);

function createStudent(name, age, sex) {
  let stu = {};
  stu.name = name;
  stu.age = age;
  stu.sex = sex;
  stu.sayHi = function () {
    console.log('hi');
  };
  return stu;
}

let coya2 = createStudent('coyan', 18, '男');
console.log(coya2);
let coya3 = new createStudent('coyan', 18, '男');
console.log(coya3);

// 使用构造函数

function PersonConstructor(name, age, height, weight) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.weight = weight;

  this.run = () => {
    console.log('run');
  };
}
let coya4 = new PersonConstructor('coyan', 18, 1.88, 70);
console.log(coya4);
