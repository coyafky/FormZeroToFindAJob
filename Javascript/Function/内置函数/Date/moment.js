const moment = require('moment');

let date = moment().format();

console.log(date); //2024-11-27T00:00:37+08:00

// 格式化为 YYYY-MM-DD
let formattedDate = moment().format('YYYY-MM-DD');
console.log('格式化为 YYYY-MM-DD: ' + formattedDate);

// 格式化为 MM/DD/YYYY
let formattedDate2 = moment().format('MM/DD/YYYY');
console.log('格式化为 MM/DD/YYYY: ' + formattedDate2);

// 格式化为 YYYY-MM-DD HH:mm:ss
let formattedDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
console.log('格式化为 YYYY-MM-DD HH:mm:ss: ' + formattedDateTime);
