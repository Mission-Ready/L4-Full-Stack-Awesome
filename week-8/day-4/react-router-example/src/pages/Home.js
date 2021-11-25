import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div>This is the home page</div>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/contact">Contact</Link></div>
      <div><Link to="/login">Login</Link></div>
    </div>
  )
}
