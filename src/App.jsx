import { useState } from "react";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // ✅ Add or Update Task
  const addTask = () => {
    if (input.trim() === "") return;

    if (editId !== null) {
      // Update existing task
      setTasks(
        tasks.map(task =>
          task.id === editId
            ? { ...task, text: input }
            : task
        )
      );
      setEditId(null);
    } else {
      // Add new task
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }
    setInput("");
  };

  // ✅ Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // ✅ Mark Complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // ✅ Edit Task
  const editTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setInput(taskToEdit.text);
    setEditId(id);
  };

  return (
    <div>
      <Header />

      <input className="input-box"
        type="text" placeholder="Enter Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="add-btn" onClick={addTask}>
        {editId ? "Update Task" : "Add Task"}
      </button>

      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
}

export default App;