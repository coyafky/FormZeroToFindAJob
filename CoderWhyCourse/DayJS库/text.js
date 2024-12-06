const dayjs = require('dayjs');

const now = dayjs();
console.log(now);

// M {
//   '$L': 'en',
//   '$d': 2024-12-03T10:01:59.951Z,
//   '$y': 2024,
//   '$M': 11,
//   '$D': 3,
//   '$W': 2,
//   '$H': 18,
//   '$m': 1,
//   '$s': 59,
//   '$ms': 951,
//   '$x': {},
//   '$isDayjsObject': true
// }

console.log(now.format('YYYY-MM-DD HH:mm:ss')); // 2024-12-03 18:02:32

const dateIbrid = dayjs('2002-08-24');
console.log(dateIbrid.format()); // 2002-08-24T00:00:00+08:00

const dateIbrid2 = dayjs('2002-08-24');
console.log(dateIbrid2.format('YYYY-MM-DD')); // 2002-08-24

// 日期操作

const date = dayjs('2004-3-13');
console.log(date.add(1, 'day').format('YYYY-MM-DD')); // 2004-3-14
console.log(date.add(1, 'month').format('YYYY-MM-DD')); // 2004-4-13
console.log(date.add(1, 'year').format('YYYY-MM-DD')); // 2005-3-13
console.log(date.subtract(1, 'day').format('YYYY-MM-DD')); // 2004-3-12
console.log(date.subtract(1, 'month').format('YYYY-MM-DD')); // 2004-2-13
console.log(date.subtract(1, 'year').format('YYYY-MM-DD')); // 2003-3-13

// 获取这个月的开始
console.log(date.startOf('month').format('YYYY-MM-DD')); // 2004-3-1
// 获取这个月的结束
console.log(date.endOf('month').format('YYYY-MM-DD')); // 2004-3-31

// 日期比较

const date1 = dayjs('2004-3-13');
const date2 = dayjs('2004-3-14');
console.log(date1.isBefore(date2)); // true

// 日期格式化

const date3 = dayjs('2004-3-13');
console.log(date3.format('YYYY-MM-DD')); // 2004-3-13
console.log(date3.format('YYYY-MM-DD HH:mm:ss')); // 2004-3-13 00:00:00

// 获取当前时间戳

const date4 = dayjs();
console.log(date4.valueOf()); // 1670813259951

// 获取当前时间

const date5 = dayjs();
console.log(date5.toDate()); // 2024-12-03T10:02:39.951Z
// 插件的扩展功能 时区支持
