// A class is a template
class Person {
  // Constructor allows you to create real world instances of the template (class)
  constructor(name) {
    // refers to the current execution context, ie the instance of the object.
    this.name = name;
  }
  greetings() {
    console.log('Hello', this.name);
  }
}

// new creates an object of the person class using it's constructor
const sebinObj = new Person('Sebin');
sebinObj.greetings(); //Hello Sebin
