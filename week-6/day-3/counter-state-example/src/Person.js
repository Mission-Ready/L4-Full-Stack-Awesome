// function Person(props) {
//   const name = props.name;
//   const age = props.age;
function Person({ name, age }) {
  return (
    <h1>
      Hi I'm {name}, I am {age} years old
    </h1>
  );
}

export default Person;
