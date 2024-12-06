let arr2 = [1, 2, 3];
arr2.forEach((x) => console.log(x));
var potatos = [
  { id: '1001', weight: 50 },
  { id: '1002', weight: 80 },
  { id: '1003', weight: 120 },
  { id: '1004', weight: 40 },
  { id: '1005', weight: 110 },
  { id: '1006', weight: 60 },
];

// 现在的需求是把这上面的数量记录成一个数组

let arr = [];
for (const potato of potatos) {
  arr.unshift(potato.weight);
}
// 验证数据是否被完全加入
console.log(arr); // [ 60, 110, 40, 120, 80, 50 ]
// 接下俩：需要对这批土豆🥔进行催熟

potatos.forEach((potato) => {
  potato.weight += 20;
});
console.log(potatos);
