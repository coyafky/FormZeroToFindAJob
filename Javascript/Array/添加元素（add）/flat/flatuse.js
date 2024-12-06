let arr = [1, [2, [3, 4]], 5];
let flatArr = arr.flat(2);
console.log(flatArr); // 输出: [1, 2, 3, 4, 5]

let nestedData = [
  { id: 1, children: [{ id: 2 }, { id: 3 }] },
  { id: 4, children: [{ id: 5 }] },
];
let flatData = nestedData.flatMap((item) => [item, ...item.children]);
console.log(flatData);
// 输出:
// [
//   { id: 1, children: [{ id: 2 }, { id: 3 }] },
//   { id: 2 },
//   { id: 3 },
//   { id: 4, children: [{ id: 5 }] },
//   { id: 5 }
// ]

let formData = [
  { name: 'Alice', hobbies: ['reading', 'swimming'] },
  { name: 'Bob', hobbies: ['running', 'cycling'] },
];
let flatHobbies = formData.flatMap((user) => user.hobbies);
console.log(flatHobbies); // 输出: ['reading', 'swimming', 'running', 'cycling']
