import React, { useState } from 'react'

export default function CounterFunc() {
  const [count, setCount] = useState(0)
  const addCount = () => setCount(count + 1)

  return (
    <div>
      Count: { count }
      <button onClick={addCount}>Add count</button>
    </div>
  )
}
