import { useState } from 'react';
export default function TaskField({ addTaskToArray }) {
  const [task, setTask] = useState('');
  const changeTask = (e) => setTask(e.target.value);

  const submitTask = (e) => {
    e.preventDefault();
    if (task) addTaskToArray(task);
    console.log(task);
  };

  return (
    <form onSubmit={submitTask} className="form-control">
      <label>Task</label>
      <input type="text" onChange={changeTask} />
      <button className="btn btn-block"> Save Task</button>
    </form>
  );
}
