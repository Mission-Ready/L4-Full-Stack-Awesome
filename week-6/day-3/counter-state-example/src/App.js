// imported this method 'useState()' from the react library.
import { useEffect, useState } from 'react';

function App() {
  // Creating a state variable called count
  // Initialized with a value 0; kind of like let count = 0;
  const [count, setCount] = useState(10);
  const [sum, setSum] = useState(0);

  // This is run when the state count gets modified.
  useEffect(() => {
    console.log(`Inside useEffect() hook. The count is ${count}`);
    // if(count is being changes, then run the following code)
    setSum(count + sum); // updates only the state of the var `sum`
  }, [count]);

  function updateCount() {
    // console.log('updateCount() called');
    // fn that updates the value of the state variable
    // setCount(count + 1); 
    // count = count - 1;
    setCount(count - 1);
    // count = count + 1;
  }

  return (
    <>
      <div>Count is {count}</div>
      <div>Sum is [count + sum]{sum}</div>
      {/* <button onClick={updateCount}> Add count</button> */}
      <button onClick={updateCount}> Subtract count by 1</button>
    </>
  );
}

export default App;
