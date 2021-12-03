import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
      <Link to="/login">Login</Link>
      <Link to="/studentList">Student List</Link>
    </div>
  )
}
