let person = {
  name: 'coyan',
  age: 18,
  height: 1.88,
};

// 使用for in

for (let key in person) {
  console.log(key, person[key]);
}
// name coyan
// age 18
// height 1.88

// 使用for of
// TypeError: person is not iterable
// for (let key of person) {
//   console.log(key, person[key]);
// }

// 使用Object.keys()
let infoKeys = Object.keys(person);

for (let i = 0; i < infoKeys.length; i++) {
  let key = infoKeys[i];
  let value = person[key];
  console.log(key, value);
}

// name coyan
// age 18
// height 1.88

const myObject = {
  name: 'John Doe',
  age: 30,
  city: 'New York',
};

// 使用 Object.values() 获取对象的值数组
const values = Object.values(myObject);

// 使用 forEach 遍历值数组
values.forEach((value) => {
  console.log(value);
});

// 输出:
// John Doe
// 30
// New York

const myObject2 = {
  name: 'John Doe',
  age: 30,
  city: 'New York',
};

// 使用 Object.entries() 获取对象的键值对数组
const entries = Object.entries(myObject2);

// 使用 forEach 遍历键值对数组
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
