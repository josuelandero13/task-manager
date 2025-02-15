import { Link } from "react-router-dom";

export default function TaskCard ({ task, onDeleteTask }) {
  return (
    <div className="task-card">
      <Link to={`/task/${task.id}`} className="task-link">
        <h2>{task.title}</h2>
      </Link>
      <p>{task.completed ? "Completada" : "Pendiente"}</p>
      <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
    </div>
  );
};
