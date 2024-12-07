const myObject = {
  name: 'John Doe',
  greet: function () {
    setTimeout(function () {
      // 普通函数
      console.log('Hello, my name is ' + this.name); // this 指向 window
    }, 1000);
  },
  greetArrow: function () {
    setTimeout(() => {
      // 箭头函数
      console.log('Hello, my name is ' + this.name); // this 指向 myObject
    }, 1000);
  },
};

myObject.greet(); // 1秒后输出: Hello, my name is undefined (this 指向全局对象)
myObject.greetArrow(); // 1秒后输出: Hello, my name is John Doe (this 指向 myObject)
