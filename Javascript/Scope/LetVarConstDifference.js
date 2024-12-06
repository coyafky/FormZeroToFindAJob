// 块级作用域

// 这个是一个作用域块
// if (true) {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }

// console.log(a);
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined

// //  变量提升
// console.log(d);
// var d = 1;

// console.log(e);  // ReferenceError: Cannot access 'e' before initialization
// let e = 2;

// console.log(f); // // ReferenceError: Cannot access 'f' before initialization
// const f = 3;

// // 全局属性
// var g = 1;
// let h = 2;
// const j = 3;
// console.log(window.g); // 1
// console.log(window.h); // undefined
// console.log(window.j); // undefined

// //重复声明

// var a = 1;
// var a = 2;
// console.log(a); //2

// let b = 1;
// let b = 2; // 无法重新声明变量b
// console.log(b);

// const c = 1;
// const c = 2; // SyntaxError: Identifier 'c' has already been declared

// 暂时性死区

// if (true) {
//   console.log(c); // undefined
//   var c = 2;
// }

// if (true) {
//   console.log(a); //
//   //ReferenceError: Cannot access 'a' before initialization
//   let a = 1;
// }

// if (true) {
//   // // ReferenceError: Cannot access 'b' before initialization
//   console.log(b);
//   const b = 2;
// }

// 初始值设置

// var a ;
// let  b ;
// const c ; //
// //SyntaxError: Missing initializer in const declaration
// console.log(a);
// console.log(b);

//. 指针指向

// var a = 1;
// a = 2;
// console.log(a);

// let b = 1;
// b = 2;
// console.log(b);

// const c = 1;
// c = 2;
// console.log(c); // TypeError: Assignment to constant variabl
