// concat 是 JavaScript 数组的一个内置方法，用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

let cold = ['blue', 'Green', 'Purple'];
let warm = ['Red', 'Orange', 'Yellow'];

let allcolor = cold.concat(warm);
console.log(allcolor);

// 合并嵌套数组

let arr1 = [[1, 2]];

let arr2 = [[3, 4], 5];

let arr3 = arr1.concat(arr2);
console.log(arr3);

// 合并数组和单个值

const odd = [1, 3, 5];
const even = [2, 4, 6];

const number = even.concat(7, odd);
// concat 合并多个数组和值的时候。 会将值作为一个元素放入新数组中 ，第一个参数优先。
console.log(number);

// 连接数组和对象

const obj = {
  name: '张三',
  age: 18,
};

const arr4 = [1, 2, 3];

const arr5 = arr4.concat(obj);
console.log(arr5);
