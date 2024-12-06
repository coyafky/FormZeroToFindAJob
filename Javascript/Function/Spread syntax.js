const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// 复制数组
const arr3 = [...arr1];

// 合并数组
const arr4 = [...arr1, ...arr2];

// 将数组元素作为函数参数传递
function myFunc(a, b, c) {
  console.log(a, b, c);
}
myFunc(...arr1);

// 在数组中插入元素
const arr5 = [0, arr1, 4];

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// 复制对象
const obj3 = { ...obj1 };
// 合并对象
const obj4 = { ...obj1, ...obj2 };
// 在对象中插入属性
const obj5 = { e: 5, ...obj1 };

// 覆盖属性
const obj6 = { ...obj1, a: 10 };

const str = 'hello';
const arrStr = [...str]; // arrStr: ['h', 'e', 'l', 'l', 'o']

const myMap = new Map([
  ['a', 1],
  ['b', 2],
]);
const arrMap = [...myMap]; // arrMap: [['a', 1], ['b', 2]]

const mySet = new Set([1, 2, 2, 3]);
const arrSet = [...mySet]; // arrSet: [1, 2, 3]
