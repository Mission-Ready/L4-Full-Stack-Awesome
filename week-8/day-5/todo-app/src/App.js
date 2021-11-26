import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import TaskField from './components/TaskField'
import TaskList from './components/TaskList'

function App() {
  const [tasksArray, setTasksArray] = useState([])

  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task])
  }

  const deleteTaskFromArray = (index) => {
    const temp = [...tasksArray]
    temp.splice(index, 1)
    setTasksArray(temp)
  }

  return (
    <div className="container">
      <Header />
      <TaskField addTaskToArray={addTaskToArray} />
      <TaskList tasksArray={tasksArray} deleteTaskFromArray={deleteTaskFromArray} />
    </div>
  );
}

export default App;
