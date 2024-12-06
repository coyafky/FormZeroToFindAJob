function modifyObjectValues(obj, callback) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = callback(obj[key]);
    }
  }
  return obj;
}

// 测试例子
const data = {
  a: 10,
  b: 20,
  c: 30,
};

const doubleValue = (value) => value * 2;

console.log(modifyObjectValues(data, doubleValue)); // ➞ { a: 20, b: 40, c: 60 }

const obj = {
  name: 'Alice',
  age: 30,
};

console.log(obj.hasOwnProperty('name')); // ➞ true
console.log(obj.hasOwnProperty('age')); // ➞ true
console.log(obj.hasOwnProperty('toString')); // ➞ false
