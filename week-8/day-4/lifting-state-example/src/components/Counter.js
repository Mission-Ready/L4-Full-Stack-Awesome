import React, {useState} from 'react'

export default function Counter({ count, updateCount}) {
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={updateCount}>Add count</button>
    </div>
  )
}
