class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let Person1 = new Person('coya', 18);
console.log(Person1);

Person.prototype.showAge = function () {
  console.log(`Age of ${this.name} is ${this.age}`);
};
Person1.showAge();
