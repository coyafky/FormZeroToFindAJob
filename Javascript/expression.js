console.log(5 < 3);
// Expected output: false

console.log(3 < 3);
// Expected output: false

// Compare bigint to number
console.log(3n < 5);
// Expected output: true

console.log('aa' < 'ab');
// Expected output: true

const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// Expected output: false

console.log(12 / 2);
// Expected output: 6

console.log(3 / 2);
// Expected output: 1.5

console.log(6 / '3');
// Expected output: 2

console.log(2 / 0);
// Expected output: Infinity

const a1 = 5; // 00000000000000000000000000000101
const b1 = -3; // 11111111111111111111111111111101

console.log(~a1); // 11111111111111111111111111111010
// Expected output: -6

console.log(~b1); // 00000000000000000000000000000010
// Expected output: 2

// striuct
const object1 = {
  key: 'value',
};

const object2 = {
  key: 'value',
};

console.log(object1 !== object2); // true
console.log(object1 !== object1); // false

console.log('hello' !== 'hello'); // false
console.log('hello' !== 'hola'); // true

console.log(3 !== 3); // false
console.log(3 !== 4); // true

console.log(true !== true); // false
console.log(true !== false); // true

console.log(null !== null); // false
console.log(null !== undefined); // true

console.log('3' !== 3); // true
console.log(true !== 1); // true
console.log(null !== undefined); // true
