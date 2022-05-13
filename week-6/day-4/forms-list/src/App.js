import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault(); // Prevents page from being reloaded
    // console.log(event.target.elements[0].value);
    setUserInput(event.target.elements[0].value);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Your name</label>
          <input type="text" />
          <p>
            When you click on the submit button, the form submit event is
            triggered
          </p>
          <button type="submit">Submit Form</button>
        </div>
      </form>
      {userInput}
    </>
  );
}

export default App;
