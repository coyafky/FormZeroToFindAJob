function isEqual(value, other, stack = new Set()) {
  // 处理基本数据类型
  if (value === other) {
    return true;
  }

  // 处理 NaN 值
  if (value !== value && other !== other) {
    return true;
  }

  // 处理循环引用
  if (stack.has(value) || stack.has(other)) {
    return value === other;
  }

  // 添加到 stack 中，用于检测循环引用
  stack.add(value);
  stack.add(other);

  // 处理对象和数组
  const valueType = typeof value;
  const otherType = typeof other;

  if (valueType !== otherType) {
    return false;
  }

  if (valueType === 'object' && value !== null && other !== null) {
    const valueKeys = Object.keys(value);
    const otherKeys = Object.keys(other);

    if (valueKeys.length !== otherKeys.length) {
      return false;
    }

    for (const key of valueKeys) {
      if (!isEqual(value[key], other[key], stack)) {
        return false;
      }
    }

    return true;
  }

  // 处理数组
  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) {
      return false;
    }

    for (let i = 0; i < value.length; i++) {
      if (!isEqual(value[i], other[i], stack)) {
        return false;
      }
    }

    return true;
  }

  return false;
}

const obj1 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  }
};

const obj2 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  }
};

console.log(isEqual(obj1, obj2)); // 输出: true