let a = 123;
let b = 123;

console.log(a === b); // true

let m = {};
let n = {};
console.log(m === n); // false

function foo(info) {
  info.name = 'kobe';
}

let info = { name: 'james' };
foo(info);
console.log(info.name);

let obj = {
  name: 'coya',
  age: 18,
};
foo(obj);
console.log(obj.name);
