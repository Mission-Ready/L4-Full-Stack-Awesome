class Person {
  // special method of the class
  // This needs to be unique for a class (only one in a class) 
  // 
  constructor(name) {
    this.name = name;
  }
}

// New keyword is used to create a new object sebin of the class Person
const sebin = new Person('Sebin Benjamin');
console.log(sebin.name);

const john = new Person('John Doe');
console.log(john.name);
