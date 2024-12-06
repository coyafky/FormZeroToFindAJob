const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};

const numbers = [1, 2, 3, 4, 5];

// 使用 for...in 遍历对象
console.log('Using for...in to iterate over object properties:');
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 使用 for...of 遍历数组
console.log('Using for...of to iterate over array elements:');
for (let num of numbers) {
  console.log(num);
}
