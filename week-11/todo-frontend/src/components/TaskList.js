export default function TaskList({ tasksArray, deleteTaskFromArray }) {
  return (
    <div>
      {tasksArray.map((task, index) => (
        <h3 className="task">
          {index + 1}. {task.description}
          <button
            onClick={() => deleteTaskFromArray(task)}
            className="delete-icon"
          >
            x
          </button>
        </h3>
      ))}
    </div>
  );
}
