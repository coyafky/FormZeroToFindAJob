function pow(a, n) {
  if (n === 1) {
    return a;
  }
  return a * pow(a, n - 1);
}
console.log(pow(2, 3));
