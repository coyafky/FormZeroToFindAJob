function Pen(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}

const pen1 = new Pen('Marker', 'Blue', '$3');

Pen.prototype.showPrice = function () {
  console.log(`Price of ${this.name} is ${this.price}`);
};

pen1.showPrice();

// 在class中定义静态方法
class Pen2 {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }

  showPrice() {
    console.log(`Price of ${this.name} is ${this.price}`);
  }
}

const pen2 = new Pen('Marker', 'Blue', '$3');
pen2.showPrice();
