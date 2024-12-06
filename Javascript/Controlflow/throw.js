function divide(a, b) {
  if (b === 0) {
    throw new Error('除数不能为零');
  }
  return a / b;
}

function checkAge(age) {
  if (age < 18) {
    throw new Error('Age must be at least 18');
  }
  console.log('Age is valid');
}

try {
  checkAge(15);
} catch (e) {
  console.error(e.message); // 输出: Age must be at least 18
}
