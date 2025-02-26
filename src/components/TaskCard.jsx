import { Link } from "react-router-dom";
import "../assets/css/TaksCard.css";

export default function TaskCard ({ task, onDeleteTask }) {
  return (
    <div className="task-card">
      <Link to={`/task/${task.id}`} className="task-link">
        <h2>{task.title}</h2>
      </Link>
      <p data-status={task.completed ? "Completada" : "Pendiente"}>
        {task.completed ? "Completada" : "Pendiente"}
      </p>
      <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
    </div>
  );
};
