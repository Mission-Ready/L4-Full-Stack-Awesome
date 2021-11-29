import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data.data)
    })
  }, [])
  
  return (
    <div className="App">
      {users.map(user => (
        <h3>{user.first_name} {user.last_name}</h3>
      ))}
    </div>
  );
}