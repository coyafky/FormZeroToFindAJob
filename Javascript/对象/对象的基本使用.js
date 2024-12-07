/*
      两个术语: 函数/方法
         函数(function): 如果在JavaScript代码中通过function默认定义一个结构, 称之为是函数.
         方法(method): 如果将一个函数放到对象中, 作为对象的一个属性, 那么将这个函数称之为方法.
  */

// key: 字符串类型, 但是在定义对象的属性名时, 大部分情况下引号都是可以省略的

//  定义一个对象
let person = {
  name: 'coyan',
  age: 18,
  height: 1.88,
  sex: '男',
  sayHi: function () {
    console.log('hi');
  },

  run: function () {
    console.log('run');
  },

  eat: function () {
    console.log('eat');
  },

  /**
   * 睡觉
   */
  sleep: function () {
    console.log('sleep');
  },

  sayName: function () {
    console.log('我的名字是:' + this.name);
  },
};
