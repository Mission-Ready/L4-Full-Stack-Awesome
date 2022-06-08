// import React from "react";

function greet(personName) {
  return { name: `Hello ${personName}` };
}

function App() {
  return (
    <>
      <h1>{greet('John').name}</h1>
      <h1>How are you </h1>
      <h1>Today is a sunny rainy day</h1>
    </>
  );
}

export default App;
