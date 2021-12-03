import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    setId(localStorage.getItem('user_id'))
  }, [])

  function login() {
    axios.post('http://localhost:4000/login', {
      email: email,
      password: password
    })
    .then(res => {
      localStorage.setItem('user_id', res.data.teacher_id)
      setId(res.data.teacher_id)
      setEmail('')
      setPassword('')
    })
  }

  function logout() {
    localStorage.removeItem('user_id')
    setId('')
  }

  return (
    <div className="loginRoot">
      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={login}>Login</button>
      {id && (
      <>
        <div>User {id} Has logged in</div>
        <button onClick={logout}>logout</button>
      </>
      )}
    </div>
  )
}
// email: sthompson@ranuiprimaryschool.co.nz password: JtHr9L/Z(pkhpdzh