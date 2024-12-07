const _ = require('lodash');

// 模拟购物车中的商品列表
const cartItems = [
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 0.5 },
  { id: 3, name: 'Orange', price: 1.0 },
];

// 模拟用户购买的商品列表
const purchasedItems = [
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 0.5 },
  { id: 3, name: 'Orange', price: 1.0 },
];

const Wrong = [{ id: 1, name: 'Apple', price: 1.5 }];

const areItemsEqual = _.isEqual(cartItems, purchasedItems);
console.log(areItemsEqual); // 输出: true

const areItemsEqual2 = _.isEqual(cartItems, Wrong);
console.log(areItemsEqual2); // 输出: false
