import React, { useState } from 'react'

export default function Exercise1Point5() {
  const [inputList, setInputList] = useState([])
  const [val, setVal] = useState('')

  const handleChange = (e) => setVal(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const temp = [...inputList]
    temp.push(val)
    console.log(temp)

    setInputList(temp)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Exercise 1.5</h2>
        <div><input onChange={handleChange} /></div>
        <input type="submit" />
      </form>
      <ul>
        {inputList.map(item => (
          <p>{item}</p>
        ))}
      </ul>
    </div>
  )
}
