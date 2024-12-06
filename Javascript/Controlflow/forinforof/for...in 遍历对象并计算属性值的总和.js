function sumObjectValue(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  return sum;
}
const data = {
  a: 10,
  b: 20,
  c: 'hello',
  d: 30,
  e: 40,
};
const result = sumObjectValue(data);
console.log(result);
