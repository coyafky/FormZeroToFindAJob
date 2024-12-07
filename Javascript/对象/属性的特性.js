const myObject = {};

Object.defineProperty(myObject, 'name', {
  value: 'Jane Doe',
  writable: false, // 属性值不可修改
  enumerable: true,
  configurable: false, // 属性特性不可修改
});

myObject.name = 'Peter Pan'; // 尝试修改属性值，不会生效
console.log(myObject.name); // 输出: Jane Doe

for (let key in myObject) {
  console.log(key); // 输出: name
}

delete myObject.name; // 尝试删除属性，不会生效
