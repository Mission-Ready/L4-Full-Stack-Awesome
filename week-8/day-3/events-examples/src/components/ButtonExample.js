import React, { useState } from 'react'

export default function ButtonExample() {
  const [count, setCount] = useState(0)

  const addCount = () => setCount(count + 1)
  const resetCount = () => setCount(0)

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={addCount}>Add count</button>
      <button onClick={resetCount}>Reset count</button>
    </div>
  )
}
