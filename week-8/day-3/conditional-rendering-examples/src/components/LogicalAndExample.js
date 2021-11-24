import React, { useState } from 'react'

export default function LogicalAndExample() {
  const [showContent, setShowContent] = useState(false)

  const changeContent = () => setShowContent(!showContent)

  return (
    <div>
      <div>{showContent && 'Congrats you found the hidden content!'}</div>
      <button onClick={changeContent}>Click</button>
    </div>
  )
}
