// Number.isNaN(value): 确定一个值是否为 NaN。这比全局 isNaN() 函数更可靠，因为全局 isNaN() 函数会先将非数字值转换为数字，然后再进行判断。

Number.isNaN(NaN);
Number.isNaN(Number("abc"));
Number.isNaN(123);
Number.isNaN("123")

isNaN(NaN); // true
isNaN(Number("abc")); // true
isNaN(123); // false
isNaN("123"); // false
isNaN("abc"); // true, 全局isNaN()会先将"abc"转换为数字，转换结果为NaN

