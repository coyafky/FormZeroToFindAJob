var value = 1;
function fn() {
  console.log(value);
}

function show() {
  var value = 2;
  fn();
}

show();

function fn2() {
  console.log(arguments);
  // arguments 属于who
  //console.log(this);
  var foo = 1;
}
fn2(2); // [Arguments] { '0': 2 }

function a() {
  console.dir(a);
}

a(); // [Function: a]

var a = 100;

function fn1() {
  console.log(a);
}

fn1(); // 100

var global 
    function a (){
        var aa =123;
        function b(){
            var bb =234;
        }
        b();
    }
a();



