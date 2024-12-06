let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // 输出: [2, 3, 4]

let arr2 = [1, 2, 3];
let copyArr2 = arr.slice();
console.log(copyArr2); // 输出: [1, 2, 3]

let str = 'hello';
let slicedStr = str.split('').slice(1, 4).join('');
console.log(slicedStr); // 输出: 'ell'
