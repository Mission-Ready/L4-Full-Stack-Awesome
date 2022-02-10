const person = {
  name : "Sebin",
  id: 41564,
  hello: function() {
    return "Hello " + this.name;
  }
}

console.log(person.hello());

person.name = "Jane"; 
console.log(person.hello());