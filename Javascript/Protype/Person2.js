const Person = {
  talk() {
    console.log('talk');
  },
  eat() {
    console.log('eat');
  },
};

const me = {};

Object.setPrototypeOf(me, Person);
console.log(me);
me.talk();
