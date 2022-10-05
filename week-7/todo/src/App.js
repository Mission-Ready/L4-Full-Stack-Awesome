import { useState } from 'react';
import './App.css'
// import Doodle from './images/doodle.jpg'
import Header from './components/Header';
import TaskField from './components/TaskField';
import TaskList from './components/TaskList';

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task]);
  };

  const deleteTaskFromArray = (taskToDelete) => {
    setTasksArray(tasksArray.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="container">
      {/* <img src={Doodle} alt="This is a doodle"/> */}
      <Header />
      <TaskField addTaskToArray={addTaskToArray} />
      <TaskList
        tasksArray={tasksArray}
        deleteTaskFromArray={deleteTaskFromArray}
      />
    </div>
  );
}

export default App;
