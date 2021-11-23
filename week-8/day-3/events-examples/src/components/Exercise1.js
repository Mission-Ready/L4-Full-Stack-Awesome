import React, { useState } from 'react'

export default function Exercise1() {
  const [inputVal, setInputVal] = useState('')
  const [val, setVal] = useState('')

  const handleChange = (e) => setVal(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault()

    setInputVal(val)
    setVal('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Exercise 1</h2>
        <div><input onChange={handleChange} /></div>
        <input type="submit" />
      </form>
      <ul>
        {inputVal}
      </ul>
    </div>
  )
}
