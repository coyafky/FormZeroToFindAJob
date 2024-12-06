(function () {
  var privatateVariable = 10;
  function privateFunction() {
    console.log('privateFunction');
  }
  console.log(privatateVariable);
  privateFunction();
})();
console.log(privatateVariable); // ReferenceError: privatateVariable is not defined无法访问私有变量
