var value = 'hello world';

function fn() {
  console.log(value);
}

fn(); // hello world

function show() {
  var value = 'hello javascript';
  fn(); // hello world
}

show();

// 为什么会是 hello world 呢？
