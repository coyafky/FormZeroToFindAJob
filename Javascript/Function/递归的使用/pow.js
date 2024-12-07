function pow(a, n) {
  let result = 1;
  if (n === 1) {
    return a;
  }
  for (let i = 0; i < n; i++) {
    result *= a;
  }
  return result;
}

let result = pow(2, 1);
console.log(result);
