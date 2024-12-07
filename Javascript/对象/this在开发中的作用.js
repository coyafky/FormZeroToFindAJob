let info = {
  name: 'coya',
  age: 18,
  running: function () {
    console.log('I am running', this.name);
  },

  eating: function () {
    console.log('I am eating', this.name);
  },
  sleep: function () {
    console.log('I am sleeping', this.name);
  },
};

info.running();
info.eating();
info.sleep();
