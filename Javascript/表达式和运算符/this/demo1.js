const test = {
  props: '123',
  func: function () {
    console.log(this.props);
  },
};
console.log(test.func());
