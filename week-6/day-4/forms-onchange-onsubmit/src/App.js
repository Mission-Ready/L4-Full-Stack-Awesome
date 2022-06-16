import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [submittedData, setSubmittedData] = useState([]); // initializing a state with an empty string

  function updateUserName(e) {
    const userNameInput = e.target.value;
    setUserName(userNameInput); // updating the state variable
  }

  function showData(e) {
    e.preventDefault(); // cancels the default action for the submit event
    const updatedData = [...submittedData, userName];
    setSubmittedData(updatedData);
  }

  return (
    <>
      <form onSubmit={showData}>
        <label>Name</label> <br />
        <input type="text" onChange={updateUserName} /> <br /> <br />
        <input type="submit" value="Show the user's name" />
      </form>
      {/* submittedData is empty when we start out, but is updated on clicking the submit button. */}
      <ol>
        {submittedData.map((name) => (
          <li> {name}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
