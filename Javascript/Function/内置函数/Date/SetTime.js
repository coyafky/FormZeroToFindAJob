let currentDate = new Date();

// 设置年份
currentDate.setFullYear(2024);
console.log('设置年份: ' + currentDate); // 例如：2024-10-05T12:34:56.789Z

// 设置月份
currentDate.setMonth(11); // 11 表示十二月
console.log('设置月份: ' + currentDate); // 例如：2024-12-05T12:34:56.789Z

// 设置日期
currentDate.setDate(25);
console.log('设置日期: ' + currentDate); // 例如：2024-12-25T12:34:56.789Z

// 设置小时
currentDate.setHours(15);
console.log('设置小时: ' + currentDate); // 例如：2024-12-25T15:34:56.789Z

// 设置分钟
currentDate.setMinutes(45);
console.log('设置分钟: ' + currentDate); // 例如：2024-12-25T15:45:56.789Z

// 设置秒
currentDate.setSeconds(30);
console.log('设置秒: ' + currentDate); // 例如：2024-12-25T15:45:30.789Z

// 设置毫秒
currentDate.setMilliseconds(500);
console.log('设置毫秒: ' + currentDate); // 例如：2024-12-25T15:45:30.500Z
