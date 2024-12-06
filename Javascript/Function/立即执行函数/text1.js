var tensquared = (function (x) {
  return x * x;
})(10);

(function name(arg) {
  console.log(arguments);
})(1);

(function (x) {
  console.log(arguments);
})(10);

(function () {
  console.log('我是立即执行函数');
})();
