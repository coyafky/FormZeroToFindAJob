function fn() {
  console.log(arguments);
  var foo = 1;
}

fn(2); //[Arguments] { '0': 2 }
// 为什么会是 [Arguments] { '0': 2 } 呢？



