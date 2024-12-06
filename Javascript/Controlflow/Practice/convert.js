function convert(temperature) {
  // 检查输入是否包含 "°C" 或 "°F"
  if (temperature.includes('°C')) {
    // 提取摄氏度数值
    let celsius = parseFloat(temperature.replace('°C', ''));
    if (isNaN(celsius)) return 'Error';

    // 转换为华氏度
    let fahrenheit = Math.round((celsius * 9) / 5 + 32);
    return `${fahrenheit}°F`;
  } else if (temperature.includes('°F')) {
    // 提取华氏度数值
    let fahrenheit = parseFloat(temperature.replace('°F', ''));
    if (isNaN(fahrenheit)) return 'Error';

    // 转换为摄氏度
    let celsius = Math.round(((fahrenheit - 32) * 5) / 9);
    return `${celsius}°C`;
  } else {
    // 输入格式不正确
    return 'Error';
  }
}

// 测试例子
console.log(convert('35°C')); // ➞ "95°F"
console.log(convert('19°F')); // ➞ "-7°C"
console.log(convert('33')); // ➞ "Error"
