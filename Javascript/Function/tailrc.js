function tailRecursiveFactorial(n, accumulator) {
  if (n <= 1) {
    return accumulator;
  } else {
    return tailRecursiveFactorial(n - 1, n * accumulator); // 尾递归调用
  }
}

// 调用尾递归函数计算阶乘
let result = tailRecursiveFactorial(5, 1);
