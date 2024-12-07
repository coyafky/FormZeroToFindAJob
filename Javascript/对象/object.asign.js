// Create Target Object
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

// Create Source Object
const person2 = { firstName: 'Anne', lastName: 'Smith' };

// Assign Source to Target
Object.assign(person1, person2);

console.log(person1); //{ firstName: 'Anne', lastName: 'Smith', age: 50, eyeColor: 'blue' }

const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };
const merged = Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 3, c: 5, d: 6 }
console.log(merged); // { a: 1, b: 3, c: 5, d: 6 }
