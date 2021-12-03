import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function StudentList() {
  const [studentList, setStudentList] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4000/getStudents/${localStorage.getItem('user_id')}`)
    .then(res => setStudentList(res.data))
  }, [])

  return (
    <div>
      {studentList.map((student, index) => (
        <h1>{student.student_id} {student.name} {student.email}</h1>
      ))}
    </div>
  )
}
