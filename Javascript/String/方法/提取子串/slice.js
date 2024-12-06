let str = 'hello world';
console.log(str.slice(1, 5)); //ello 从索引 1 到 5，不包含 5

console.log(str.slice(1)); //ello 从索引 1 到结束
console.log(str.slice(-3)); //rld 从索引 -3 到结束

console.log(str.slice(-3, -1)); //rl 从索引 -3 到 -1，不包含 -1
console.log(str.slice(5, 1)); //'' 从索引 5 到 1，不包含 1
