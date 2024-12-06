let pattern = new RegExp('juejin', 'i');

let domain = 'www.juejin.com';
console.log(domain.match(pattern));
let result = domain.replace(pattern, '51chigua');
console.log(result);

let domain2 = 'www.juejin.com/juejin';

let pattern1 = /abc/i;
let pattern2 = /juejin/i;
let pattern3 = new RegExp('juejin', 'g');
console.log(domain2.match(pattern1)); // null
console.log(domain2.match(pattern2)); //[ 'juejin' ]
console.log(domain2.match(pattern3)); //[ 'juejin', 'juejin' ]

const str = 'red,blue,green,white,black,orange,red';
const reg = /(red|blue|green)/g;
console.log(str.split(reg));
