function factorize(number) {
  // Initialize an empty array to store the factors
  let factors = [];

  // Loop from 1 to the number itself
  for (let i = 1; i <= number; i++) {
    // Check if the current number is a factor
    if (number % i === 0) {
      // If it is, add it to the factors array
      factors.push(i);
    }
  }

  // Return the array of factors
  return factors;
}

// Test cases
console.log(factorize(12)); // ➞ [1, 2, 3, 4, 6, 12]
console.log(factorize(4)); // ➞ [1, 2, 4]
console.log(factorize(17)); // ➞ [1, 17]
