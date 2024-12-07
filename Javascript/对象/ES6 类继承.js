class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, bread) {
    super(name); // 调用父类的构造函数
    this.bread = bread;
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.eat(); // 输出: Buddy is eating
myDog.bark(); // 输出: Buddy is barking
console.log(myDog.bread); // 输出: Golden Retriever
