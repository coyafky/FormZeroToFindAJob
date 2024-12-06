function Person(name) {
  this.name = name;
}

Person.prototype.showname = function () {
  console.log(this.name);
};

const p1 = new Person('小明');
const p2 = new Person('小红');

console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
console.log(person1.__proto__ === Person.prototype); // true
console.log(person1.sayHello()); // Hello, my name is Alice
console.log(person2.sayHello()); // Hello, my name is Bob
