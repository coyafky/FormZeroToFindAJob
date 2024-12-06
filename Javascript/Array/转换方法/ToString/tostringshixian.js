Array.prototype.myTostring = function () {
  let result = '';

  for (let i = 0; i < this.length; i++) {
    if (i > 0) {
      result += ',';
    }
    result += String(this[i]);
  }
  return result;
};

let arr = [1, 2, 3, 4, 5];
let str = arr.myTostring();
console.log(str);
