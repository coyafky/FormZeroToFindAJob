let boolPrimitive = true; // 原始布尔值
let boolObject = new Boolean(false); // 布尔对象

console.log(typeof boolPrimitive); // boolean
console.log(typeof boolObject); // object

if (boolPrimitive) {
  console.log('boolPrimitive is true');
}
if (boolObject) {
  console.log('boolObject is true'); // // 输出: Boolean 对象 (即使值为 false) 也为真
}

console.log(boolObject.valueOf()); //false

console.log(boolObject.toString()); // "false"
console.log(Boolean.length) // 1;
