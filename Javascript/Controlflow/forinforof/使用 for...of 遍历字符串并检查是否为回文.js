function isPailindrome(str) {
  const reservedStr = [...str].reverse().join('');
  return str === reservedStr;
}
console.log(isPailindrome('hello')); // false
console.log(isPailindrome('level')); // true

