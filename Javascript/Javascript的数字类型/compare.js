//  == 等于运算符用于比较两个值是否相等，不考虑类型。如果两个值相等，则返回 true，否则返回 false。

console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(5 == 6); // false

//  严格等于（===） 严格等于运算符用于比较两个值是否相等，同时考虑类型。如果两个值相等且类型相同，则返回 true，否则返回 false
console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(5 === 6); // false

// 不等于运算符用于比较两个值是否不相等，不考虑类型。如果两个值不相等，则返回 true，否则返回 false。
console.log(5 != 5); // false
console.log(5 != '5'); // false
console.log(5 != 6); // true

// 严格不等于运算符用于比较两个值是否不相等，同时考虑类型。如果两个值不相等或类型不同，则返回 true，否则返回 false。
console.log(5 !== 5); // false
console.log(5 !== '5'); // true
console.log(5 !== 6); // true

// 大于运算符用于比较两个值，判断左边的值是否大于右边的值。如果是，则返回 true，否则返回 false
console.log(5 > 3); // true
console.log(5 > 5); // false
console.log(5 > 6); // false

//小于运算符用于比较两个值，判断左边的值是否小于右边的值。如果是，则返回 true，否则返回 false。
console.log(5 < 3); // false
console.log(5 < 5); // false
console.log(5 < 6); // true

// 大于等于（>=）
//大于等于运算符用于比较两个值，判断左边的值是否大于或等于右边的值。如果是，则返回 true，否则返回 false。

console.log(5 >= 3); // true
console.log(5 >= 5); // true
console.log(5 >= 6); // false

// 小于等于（<=）
//小于等于运算符用于比较两个值，判断左边的值是否小于或等于右边的值。如果是，则返回 true，否则返回 false。
console.log(5 <= 3); // false
console.log(5 <= 5); // true
console.log(5 <= 6); // true
