// imported this method 'useState()' from the react library.
import { useState } from 'react';

export default function AddCounter() {
    // Creating a state variable called count
  // Initialized with a value 0; kind of like let count = 0;

  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={updateCount}>Add 1 to the count</button>
    </div>
  );
}
