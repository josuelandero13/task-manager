import { Link } from "react-router-dom";
import "../../assets/css/TaksCard.css";

export default function TaskCard ({ task }) {
  return (
    <div className="task-card">
      <Link
        to={`/tasks/${task.id}`}
        state={{ task }}
        className="task-link"
      >
        <h2>{task.title}</h2>
      </Link>
      <p data-status={task.status ? "Completada" : "Pendiente"}>
        {task.status ? "Completada" : "Pendiente"}
      </p>
      <button>Eliminar</button>
    </div>
  );
};
