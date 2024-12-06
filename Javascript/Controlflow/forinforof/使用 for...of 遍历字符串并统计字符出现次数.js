function countCharacters(str) {
  const count = {}; // 使用对象来存储字符计数
  for (let char of str) {
    if (count[char]) {
      // count[char]：访问对象 count 中键为 char 的属性。如果该属性存在，说明这个字符已经出现过
      // if (count[char])：检查 count[char]
      //是否存在且为真值（即不为 undefined、null、0、false、NaN 或空字符串）。
      //如果存在，说明这个字符已经出现过

      // count[char]++：如果字符 char 已经出现过，则将其对应的计数值加 1。

      count[char]++;
    } else {
      //  count[char] = 1：如果字符 char 还没有出现过，则将其对应的计数值初始化为 1。
      count[char] = 1;
    }
  }
  return count;
}

// 测试用例
console.log(countCharacters('hello world')); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
