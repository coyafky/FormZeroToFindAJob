let str = 'a b c d';
let result = str.split(' ', 2);
console.log(result); //[ 'a', 'b' ]

// 使用正则表达式并限制长度
let str2 = 'a b c d';
let result2 = str2.split(/\s+/, 2);
console.log(result2); //[ 'a', 'b' ]
