function formatNumber(num) {
  // 检查传入的参数是否为数字
  if (typeof num !== 'number') {
    return '请传入一个数字';
  }

  // 定义单位
  const units = ['', '万', '亿'];

  // 将数字转换为字符串，并去掉小数部分
  let numStr = Math.floor(num).toString();

  // 计算数字的长度
  let len = numStr.length;

  // 计算单位索引
  let unitIndex = Math.floor((len - 1) / 4);

  // 计算需要截取的数字部分
  let numPart = numStr.slice(0, len % 4 || 4);

  // 返回格式化后的字符串
  return numPart + units[unitIndex];
}

// 示例
console.log(formatNumber(123456789)); // 输出: 1亿
console.log(formatNumber(12345)); // 输出: 1万
console.log(formatNumber(123)); // 输出: 123
console.log(formatNumber(12345678)); // 输出: 1234万
console.log(formatNumber(1234567890)); // 输出: 12亿
