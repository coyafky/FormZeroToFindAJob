function outerFunction() {
  let outervariable = '我是来自outerfunction';

  function innerfunction() {
    console.log(outervariable);
  }
  // 为什么，需要 return innerfunction
  return innerfunction;
}

const myClosure = outerFunction();
myClosure();

// 闭包的作用

function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  return bar;
}

var baz = foo();
baz();

// 创建一个具有一个内部函数的闭包
function ounterFunction() {
  let count = 0;

  function innerfunction() {
    count++;
    return count;
    console.log(count);
  }

  return innerfunction;
}
