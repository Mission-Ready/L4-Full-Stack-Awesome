export default function Person({ name, age }) {
  return (
    <h1>
      Hi I'm {name}, I am {age} years old.
    </h1>
  );
}

// export default function Person(props) {
//   let name = props.name;
//   let age = props.age;

//   return (
//     <h1>
//       Hi I'm {name}, I am {age} years old.
//     </h1>
//   );
// }

// export default Person;