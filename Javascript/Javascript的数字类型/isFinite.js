console.log(isFinite(Infinity)); //false
console.log(isFinite(NaN)); //false
console.log(isFinite(-Infinity)); //false

console.log(isFinite(123345)); //true
console.log(isFinite(0)); //true
console.log(isFinite('123')); //true

console.log(isFinite('123abc')); //false

console.log(isFinite(1.2345)); //true
