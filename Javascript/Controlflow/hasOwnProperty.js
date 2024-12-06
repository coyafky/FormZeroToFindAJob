const obj = { a: 1, b: 2, c: 3 };

// 添加一个原型链上的属性
Object.prototype.d = 4;

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}
