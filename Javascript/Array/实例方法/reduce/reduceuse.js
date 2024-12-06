let arr = [1, 2, 3, 4];
let sum = arr.reduce((accmulator, currentValue) => {
  accmulator += currentValue;
  return accmulator;
});

console.log(sum);

// 数组去重

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let arr3 = [1, 2, 3, 4, 4, 1];
let newArr3 = arr3.reduce((pre, cur) => {
  if (!pre.includes(cur)) {
    return pre.concat(cur);
  } else {
    return pre;
  }
}, []);
console.log(newArr3); // [1, 2, 3, 4]

// 将多维数组转化为一维数组

let arr2 = [
  [0, 1],
  [2, 3],
  [4, [5, 6, 7]],
];
const newArr = function (arr2) {
  return arr2.reduce(
    (pre, cur) => pre.concat(Array.isArray(cur) ? newArr(cur) : cur),
    []
  );
};
console.log(newArr(arr2)); //[0, 1, 2, 3, 4, 5, 6, 7]

// 使用reduce实现map fliter方法

const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((accmulator, currentValue) => {
  if (currentValue > 0) {
    accmulator.push(currentValue * 2);
  }
  return accmulator;
}, []);

console.log(doubledPositiveNumbers); //[12, 4]

// 按照属性对对象进行分组

const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);

// 对象属性求和

let orders = [
  { product: 'Apple', price: 1.2 },
  { product: 'Banana', price: 2.1 },
  { product: 'Orange', price: 0.9 },
];

let totalPrice = orders.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);

console.log(totalPrice); // 4.2
