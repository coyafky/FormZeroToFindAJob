let num = new Number(1);
console.log(typeof num); // object

console.log(num);
console.log(num.valueOf()); // valueof Returns the primitive value of the specified object.

let unnun = new Number('coua');
console.log(unnun); // [Number: NaN] 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)。

let numstring = new Number('123');
console.log(numstring.valueOf()); // 123
