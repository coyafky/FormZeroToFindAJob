// 分割 CSV 文件内容
let csv = "John,Doe,30,New York";
let data = csv.split(",");
console.log(data); // ["John", "Doe", "30", "New York"]

// 分割 URL 参数
let url = "https://example.com/page?name=John&age=30";
let params = url.split("?")[1].split("&");
console.log(params); // ["name=John", "age=30"]

// ：分割多行文本
let text = "Line1\nLine2\nLine3";
let lines = text.split("\n");
console.log(lines); // ["Line1", "Line2", "Line3"]

// 空字符串分隔
let str = "Hello";
let result = str.split("");
console.log(result); // ["H", "e", "l", "l", "o"]