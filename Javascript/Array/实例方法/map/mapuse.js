let arr = [1, 2, 3];

let mappedArr = arr.map((x) => x * 2);

console.log(mappedArr);

// 使用map格式化对象

let arr2 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

const reformattedArr = arr2.map(({ id, name }) => ({
  id,
  name: name.toUpperCase(),
}));

console.log(reformattedArr);

// 在飞数组对象上使用map
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]

// map 来转换数组类型

let strings = ['10', '20', '30'];

let numbers = strings.map(function (item) {
  return Number(item);
});

console.log(numbers); // [ 10, 20, 30 ]

// 对象属性提取

let arr3 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

let names = arr3.map(({ name }) => name);

console.log(names); // [ 'John', 'Jane', 'Bob' ]
