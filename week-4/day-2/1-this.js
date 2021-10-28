const person = {
  firstName: "Sebin",
  lastName: "Benjamin",
  greetings: function () {
    // Access property firstName in the local context using the *this* keyword 
    console.log('Hello', this.firstName);
    this.helloThere();
  },
  helloThere: function () {
    // Access property firstName in the local context using the *this* keyword 
    console.log('Today the Internet was weird');
  }
}

