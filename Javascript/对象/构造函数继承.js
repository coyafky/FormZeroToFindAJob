function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};
Animal.prototype.sleep = function () {
  console.log(`${this.name} is sleeping`);
};

function Dog(name, breed) {
  Animal.call(this, name); // 调用父类构造函数
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // 继承父类原型
Dog.prototype.constructor = Dog; // 修正 constructor 属性
Dog.prototype.bark = function () {
  console.log('Woof!');
};
const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.eat(); // 输出: Buddy is eating
myDog.sleep(); // 输出: Buddy is sleeping
myDog.bark(); // 输出: Woof!
console.log(myDog.breed); // 输出: Golden Retriever
