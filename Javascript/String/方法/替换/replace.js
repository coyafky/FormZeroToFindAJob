// 替换
let str = 'Hello World';
let newStr = str.replace('World', 'JavaScript');
console.log(newStr); // Hello JavaScript

// 使用正则表达式替换
let str1 = 'Hello World';
let newStr1 = str1.replace(/World/g, 'JavaScript');
console.log(newStr1); // Hello JavaScript

// 使用函数替换
let str2 = 'Hello World';
let newStr2 = str2.replace(/World/g, function (match) {
  return match.toUpperCase();
});
console.log(newStr2); //Hello WORLD
