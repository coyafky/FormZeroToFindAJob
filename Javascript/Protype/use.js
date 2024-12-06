function Person(age) {
  this.age = age;
}

Person.prototype.showAge = function () {
  console.log(`Age is ${this.age}`);
};

let Person1 = new Person(18);
console.log(Person1);

let Person2 = new Person(20);
console.log(Person2);
