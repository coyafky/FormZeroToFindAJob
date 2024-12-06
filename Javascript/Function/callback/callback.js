function add(sum1, sum2, callback) {
  let sum = sum1 + sum2;
  callback(sum);
}

add(1, 2, function (sum) {
  console.log(sum);
}); //3

function add(num1, num2, callback) {
  var sum = num1 + num2;
  if (typeof callback === 'function') {
    callback(sum);
  }
}

var obj = {
  sum: 0,
  add: function (num1, num2) {
    this.sum = num1 + num2;
  },
};

function add(num1, num2, callbackObj, callback) {
  callback.apply(callbackObj, [num1, num2]);
}

add(1, 2, obj, obj.add);
console.log(obj.sum); //=>3

var a = 0;

function bb(x) {
  console.log(x);
}

function timer(time, callback) {
  setTimeout(function () {
    a = 6;
    callback(a);
  }, time);
}

//调用:
console.log(a); //0
timer(3000, bb); //6 after 3s

function first() {
  // 模拟代码延迟
  setTimeout(function () {
    //所以function(){console.log(1)}是回调函数
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

// 整个程序运行结果为: 2  1 ,并不是原先的1 2 .即使我们首先调用了 first() 函数，我们记录的输出结果却在 second() 函数之后。

// 这不是 JavaScript 没有按照我们想要的顺序执行函数的问题，而是 JavaScript 在继续向下执行 second() 之前没有等待 first() 响应的问题。回调正是确保一段代码执行完毕之后再执行另一段代码的方式。

function asyncOperation1(callback) {
  setTimeout(function () {
    console.log('异步操作1完成');
    callback();
  }, 2000);
}

function asyncOperation2(callback) {
  setTimeout(function () {
    console.log('异步操作2完成');
    callback();
  }, 1000);
}

function asyncOperation3(callback) {
  setTimeout(function () {
    console.log('异步操作3完成');
    callback();
  }, 1500);
}

asyncOperation1(function () {
  asyncOperation2(function () {
    asyncOperation3(function () {
      console.log('所有异步操作完成');
    });
  });
});
