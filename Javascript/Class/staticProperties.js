class Circle {
  static PI = 3.14;
  constructor(r) {
    this.r = r;
  }

  getArea() {
    return Circle.PI * this.r * this.r;
  }
  getPerimeter() {
    return 2 * Circle.PI * this.r;
  }
}

let circle1 = new Circle(1);
console.log(circle1.getArea());
