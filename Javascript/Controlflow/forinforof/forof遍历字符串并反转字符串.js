function reserveString(str) {
  let newstr = '';

  for (let char of str) {
    newstr = char + newstr;
  }
  return newstr;
}
console.log(reserveString('hello'));

