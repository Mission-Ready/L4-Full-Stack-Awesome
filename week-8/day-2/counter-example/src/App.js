import './App.css';
import { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [sum, setSum] = useState(0)

  useEffect(() => {
    console.log(`the count is at ${count}`)
    setSum(sum + count)
    console.log(`the sum is at ${sum}`)
  }, [count])

  function updateCount() {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <div>
        count: {count}
      </div>
      <button onClick={updateCount}>add Count</button>
    </div>
  );
}
