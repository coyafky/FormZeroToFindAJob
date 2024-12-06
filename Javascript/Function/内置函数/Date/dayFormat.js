let currentDate = new Date();

let localeDateString = currentDate.toDateString();
console.log('本地化日期格式' + localeDateString);

// 本地化时间格式
let localeTimeString = currentDate.toLocaleTimeString();
console.log('本地化时间格式: ' + localeTimeString);

// Tostring
let defaultString = currentDate.toString();
console.log('默认日期时间字符串: ' + defaultString);

// 使用 toDateString() 和 toTimeString() 方法获取日期和时间字符串
let dateString = currentDate.toDateString();
console.log('日期字符串: ' + dateString);
let timeString = currentDate.toTimeString();
console.log('时间字符串: ' + timeString);
