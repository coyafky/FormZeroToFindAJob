// 导出一个函数
export function greet(name) {
  return `Hello, ${name}!`;
}

// 导出一个变量
export const version = '1.0.0';

// 导出一个类
export class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hello, my name is ${this.name}.`;
  }
}
