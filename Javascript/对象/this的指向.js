function foo() {
  console.log(this); // window
}
foo();

var obj = {
  bar: function () {
    console.log(this); // obj { bar: [Function: bar] }
  },
};
obj.bar();
