const obj = {};

Object.defineProperties(obj, {
  property: {
    value: 'value',
    writable: true,
  },
  property2: {
    value: 'value2',
    writable: false,
  },
});

console.log(obj.property);
console.log(obj.property2);
obj.property2 = 'newValue';
console.log(obj.property2); // 输出: value2 （属性不可写）

obj.property = 'newValue';
console.log(obj.property); // 输出: newValue
