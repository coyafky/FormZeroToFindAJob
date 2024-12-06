//  遍历数组

const arr = [10, 1, 2, 3, 4, 5];
for (const value of arr) {
  console.log(value);
}

// 遍历字符串

const string = 'hello';

for (const value of string) {
  console.log(value);
}

// 遍历map

const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

for (const entry of map) {
  console.log(entry);
}
// 遍历set

const set = new Set([1, 2, 3, 4]);
for (const value of set) {
  console.log(value);
}
