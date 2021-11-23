import React, { useState } from 'react'

export default function FormExample() {
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input />
        <input type="submit" />
      </form>
    </div>
  )
}
