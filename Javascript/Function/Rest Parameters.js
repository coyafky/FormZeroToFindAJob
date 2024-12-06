function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // 6

function add(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
let num2 = add(1, 2, 3);
console.log(num2); //6

function multiply(multipler, ...numbers) {
  return numbers.map((number) => multipler * number);
}
let num3 = multiply(2, 1, 2, 3);
console.log(num3); //2,4,6 
