import { useEffect, useState } from 'react';

export default function AddCounter() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  function updateSum() {
    setSum(sum + 1);
  }

  // This is run when the state count gets modified.
  useEffect(() => {
    console.log('count1', count);
    // if(count is being changes, then run the following code)
    setSum(sum + count);
    console.log('countSum', sum);
    // });
  }, [count]); // - Dependency (when to run the useEffect Hook)

  return (
    <div>
      <div>Count: {count}</div>
      <div>Count: {count}</div>
      <div>Count: {count}</div>
      <div>Count: {count}</div>
      <div>Count: {count}</div>
      <div>Count: {count}</div>
      <br />
      <div>CountSum: {sum}</div>
      <button onClick={updateCount}>Add 1 to count</button>
      <button onClick={updateSum}>Add 1 to Sum</button>
    </div>
  );
}
