let myModule = (function () {
  let privateVariable = 'Hello, world!';
  function privateMethod() {
    console.log(privateVariable);
  }
  return {
    publicVariable: 'Public variable',
    publicMethod: function () {
      console.log(privateVariable);
      privateMethod();
    },
  };
})();

myModule.publicMethod();
