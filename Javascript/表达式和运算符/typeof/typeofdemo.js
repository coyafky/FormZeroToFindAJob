// typeof 运算符返回一个字符串，表示操作数的类型。

// typeof operand  operand 表示要返回类型的对象或基本类型的表达式。

// 数字

console.log(typeof 37);
console.log(typeof 3.14);
console.log(typeof Math.LN2);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof Number(1));

// 字符串

console.log(typeof 'blah');
console.log(typeof new String('blah')); // object
console.log(typeof String('blah'));
console.log(typeof `blah`);

// 布尔值
console.log(typeof true);
console.log(typeof false);
console.log(typeof Boolean(true));
console.log(typeof Boolean(false));
console.log(typeof Boolean(0));
console.log(typeof Boolean(''));
console.log(typeof Boolean(1));

// 对象
console.log(typeof { a: 1 }); //object

// 空值
console.log(typeof null); // object JavaScript 诞生以来便如此
// 未定义
console.log(typeof undefined);

// 符号
console.log(typeof Symbol('foo'));

// // 使用 Array.isArray 或者 Object.prototype.toString.call
// 区分数组和普通对象

typeof [1, 2, 4];
console.log(Array.isArray([1, 2, 4]));
// 函数
console.log(typeof function () {});
typeof class C {} === 'function';
typeof Math.sin === 'function';

// new 操作符  所有使用 new 调用的构造函数都将返回非基本类型（"object" 或 "function"）。大多数返回对象，但值得注意的例外是 Function，它返回一个函数。
console.log(typeof new Boolean('1'));
console.log(typeof new String('abc'));
console.log(typeof new Number(1));

console.log(typeof new Function()); // function

// function
console.log(typeof function () {}); // function

console.log(typeof typeof function () {}); // string

console.log(typeof class C {}); // function
console.log(typeof Math.sin); // function

// typeof 操作符的优先级高于加法（+）等二进制操作符。因此，需要用括号来计算加法结果的类型。

const somedata = 99;
console.log(typeof somedata + 'wiki'); // numberwiki
console.log(typeof (somedata + '99')); //string

// typeof 通常总是保证为它提供的任何操作数返回一个字符串。即使使用未声明的标识符，typeof 也会返回 "undefined"，而不是抛出错误。
console.log(typeof undeclareVar); // undefined
