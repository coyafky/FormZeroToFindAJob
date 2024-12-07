const animal = {
  eat: function () {
    console.log('吃');
  },
  sleep: function () {
    console.log('睡');
  },
};

const dog = Object.create(animal);

dog.bark = function () {
  console.log('汪汪汪');
};

dog.bark();
dog.eat();
dog.sleep();
console.log(dog);
