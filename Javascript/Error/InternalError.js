function foo() {
  foo();
}
foo(); // InternalError: too much recursion
// RangeError: Maximum call stack size exceeded
