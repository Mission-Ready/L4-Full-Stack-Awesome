const persons = {
  fname: 'Sebin',
  lname: 'Benjamin',
  hello: greet,
};

function greet() {
  console.log('Hello: ' + this.fname + " " + this.lname);
}

persons.hello();
fname = "John";
lname = "Doe";
window.greet()
