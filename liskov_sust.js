class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}
function renderLargeRectangles(rectangles) {
  rectangles.forEach((rectangle) => {
    const area = rectangle.getArea();
  });
}

const rectangles = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(4)];
renderLargeRectangles(rectangles);
