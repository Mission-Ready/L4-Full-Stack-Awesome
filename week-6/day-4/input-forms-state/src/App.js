import {useState} from 'react';

function App() {
  const [userInput, setUserInput] = useState("");

  function handleChange(event) {
    const newInputText = event.target.value;
    console.log(newInputText);
    setUserInput(newInputText); // this updates the state
  }

  return (
    <>
      <div>
        <label>Your name</label>
        <div>
          <input type="text" onChange={handleChange} />
        </div>
        {userInput} <br />
      </div>
    </>
  );
}

export default App;
