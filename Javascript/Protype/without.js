function person(age) {
  this.age = age;

  this.showAge = function () {
    console.log(`Age  is ${this.age}`);
  };
}

const tom = new person(18);
const sam = new person(20);
console.log(tom);
console.log(sam);

tom.showAge();
// person { age: 18, showAge: [Function (anonymous)] }
// person { age: 20, showAge: [Function (anonymous)] }