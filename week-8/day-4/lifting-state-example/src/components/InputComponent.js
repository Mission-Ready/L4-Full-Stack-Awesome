import React, { useState } from 'react'

export default function InputComponent({ val, handleChange }) {

  return (
    <div>
      <div><input value={val} type="text" onChange={handleChange}/></div>
    </div>
  )
}
