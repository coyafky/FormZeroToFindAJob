class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} makes a ${this.sound} sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'woof');
    this.breed = breed;
  }

  fetch() {
    console.log(`${this.name} fetches the ball`);
  }
}

let animal1 = new Animal('Generic Animal', 'Generic Sound');
animal1.makeSound();

let dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.makeSound();
dog1.fetch();

console.log(dog1.name);
console.log(dog1.sound);
console.log(dog1.breed);

class Cat extends Animal {
  constructor(name, color) {
    super(name, 'meow');
    this.color = color;
  }
  purr() {
    console.log(`${this.name} purrs`);
  }
}
let cat1 = new Cat('Whiskers', 'Gray');
cat1.makeSound();
cat1.purr();
