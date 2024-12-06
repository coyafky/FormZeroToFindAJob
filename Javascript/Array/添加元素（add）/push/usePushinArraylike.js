const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

Array.prototype.push.call(arrayLike, 'd');

console.log(arrayLike);
