function calculateAverage(numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(average);
