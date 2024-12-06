// 创建当前的日期和时间
let currentDate = new Date();
console.log(currentDate);

// 创建指定日器和时间
const specificDate = new Date(2023, 9, 5, 12, 12, 56, 789);
console.log(specificDate);

// 从字符串创建日期
let dateFromString = new Date("2023-10-05T12:34:56.789Z");
console.log(dateFromString); // 输出：2023-10-05T12:34:56.789Z
