


function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {

  return (
    <div>
      <span
        onClick={() => toggleComplete(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: "10px"
        }}
      >
        {task.text}
      </span>

      <button className="edit-btn" onClick={() => editTask(task.id)}>
        Edit
      </button>

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;