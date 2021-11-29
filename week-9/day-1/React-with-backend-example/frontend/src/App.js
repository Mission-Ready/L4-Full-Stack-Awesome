import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'

export default function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/getStudents`)
    .then(res => {
      setStudents(res.data)
    })
  }, [])
  
  return (
    <div className="App">
      {students.map((student, index) => (
        <h3>{student.name}</h3>
      ))}
    </div>
  );
}