import React, { useState } from 'react'

export default function TernaryExample() {
  const [showContent, setShowContent] = useState(false)

  const changeContent = () => setShowContent(!showContent)

  return (
    <div>
      <div>{showContent 
      ? <h1>Congrats you found the hidden content!</h1> 
      : ''
      }
    </div>
      <button onClick={changeContent}>Click</button>
    </div>
  )
}