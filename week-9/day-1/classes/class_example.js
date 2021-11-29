// create a new class called Rectangle
// add a constructor that takes in a height and width
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

// create a new Rectangle object with the class
const myRect = new Rectangle(5, 10);

// access the new rectangle's properties
console.log(myRect.height);
console.log(myRect.width);

// get the area of the Rectangle
console.log(myRect.area());
