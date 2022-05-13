a = 25
// console.log(a);
// console.log("window.a");
// console.log(window.a);

const persons = {
  fname: 'Sebin',
  lname: 'Benjamin',
  hello: function () {
    console.log('Hello: ' + this.fname + " " + this.lname);
  },
};

function greet() {
  console.log('Hello: ' + this.fname + " " + this.lname);
}

persons.hello();
fname = "John";
lname = "Doe";
window.greet();
