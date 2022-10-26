import { useState, useEffect } from 'react';
import './App.css';
// import Doodle from './images/doodle.jpg'
import Header from './components/Header';
import TaskField from './components/TaskField';
import TaskList from './components/TaskList';

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, { description: task }]);

    // Call the POST API to add a task to the DB when the submit is clicked
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ description: task }),
    };
    console.log(requestOptions);

    fetch('http://localhost:4000', requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  const deleteTaskFromArray = (taskToDelete) => {
    setTasksArray(tasksArray.filter((task) => task !== taskToDelete));
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      description: taskToDelete.description,
    });

    console.log(raw);
    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
    };

    fetch('http://localhost:4000', requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  // Call the GET API to read all the task from the DB when the page is loaded
  useEffect(() => {
    fetch('http://localhost:4000')
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTasksArray(result);
      })
      .catch((error) => console.log('error', error));
  }, []);

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
