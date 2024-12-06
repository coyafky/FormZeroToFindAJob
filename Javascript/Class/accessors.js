class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get_area() {
    return this.width * this.height;
  }
  get_perimeter() {
    return (this.width + this.height) * 2;
  }

  setWidth(width) {
    if (width > 0) {
      this.width = width;
    } else {
      console.log('宽度必须大于0');
    }
  }
  setHeight(height) {
    if (height > 0) {
      this.height = height;
    } else {
      console.log('高度必须大于0');
    }
  }
}
