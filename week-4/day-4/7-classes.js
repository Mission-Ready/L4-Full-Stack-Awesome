class Person {
  // Constructor is a special method of the class
  // The Constructor needs to be unique for a class (only one allowed in a class) 
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log('Hello, I am ' + this.name);
  }
}
// You can have multiple classes in the same file
class Student {
  // Constructor is a special method of the class
  // The Constructor needs to be unique for a class (only one allowed in a class) 
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log('Hello, I am ' + this.name);
  }
}

// New keyword is used to create a new object of the class 'Person' and the newly 
// created object is stored in sebin
const sebin = new Person('Sebin Benjamin');
console.log(sebin.name);
sebin.introduce();

// Another object is created
const john = new Person('John Doe');
console.log(john.name);
john.introduce();
