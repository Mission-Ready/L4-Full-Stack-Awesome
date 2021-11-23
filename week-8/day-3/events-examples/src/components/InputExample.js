import React, { useState } from 'react'

export default function InputExample() {
  const [val, setVal] = useState('')

  const handleChange = (e) => setVal(e.target.value)

  return (
    <div>
      <label>Input field</label>
      <div><input onChange={handleChange} /></div>
      {val}
    </div>
  )
}
