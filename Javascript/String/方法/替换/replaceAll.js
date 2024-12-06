let str = 'apple, banana, apple, orange';

let newStr = str.replaceAll('apple', 'grape');
console.log(newStr); // grape, banana, grape, orange

let str2 = 'This is a test string. This is another test.';
let newStr2 = str2.replaceAll(/text/g, 'example');
console.log(newStr2); // This is a example string. This is another example.

let str3 = '123abc456abc789';
let newStr3 = str3.replaceAll('abc', 'def');
console.log(newStr3); // 123def456def789

// 使用函数作为 replacement 参数

let str4 = 'apple,banana,apple,orange';
let newStr4 = str4.replaceAll(/apple/g, function (match) {
  return match.toUpperCase();
});

console.log(newStr4); // APPLE,banana,APPLE,orange

// 使用空字符串作为 replacement 参数
let str5 = 'apple,banana,apple,orange';
let newStr5 = str5.replaceAll(/apple/g, '');
console.log(newStr5); //,banana,,orange

