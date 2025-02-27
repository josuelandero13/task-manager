import { useState } from "react";
import "../../assets/css/TaskForm.css";

export default function TaskForm ({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
