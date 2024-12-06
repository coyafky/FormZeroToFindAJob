let str = "Hello, world!";

// 从索引 0 开始提取到索引 5 (不包含)
let sub1 = str.substring(0, 5);  // sub1 = "Hello"

// 从索引 7 开始提取到字符串结尾
let sub2 = str.substring(7);     // sub2 = "world!"

// startIndex 大于 endIndex，参数会自动交换
let sub3 = str.substring(10, 5); // sub3 = "world"

// startIndex 超出字符串长度
let sub4 = str.substring(20, 25); // sub4 = ""

// startIndex 为负数，会被视为 0
let sub5 = str.substring(-2, 5); // sub5 = "Hello"

console.log(sub1, sub2, sub3, sub4, sub5);