import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');

  function handleInputChange(event) {
    const newInputText = event.target.value;
    setUserInput(newInputText); // this updates the state
  }

  return (
    <>
      <label>Your name</label>
      <br />
      <br />
      <input type="text" onChange={handleInputChange} />
      <br />
      <br />
      {userInput}
    </>
  );
}

export default App;
