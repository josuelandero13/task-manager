import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { updateTask } from "../../services/task";
import "../../assets/css/TaskDetails.css";

export default function TaskEditor() {
  const navigate = useNavigate();
  const location = useLocation();
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "",
    priority: "",
    is_archived: 0,
    user_id: 1,
    category_id: 1,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { task } = location.state;
        setTask(task);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTask();
  }, [location]);

  // Manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !task.title ||
        !task.description ||
        !task.due_date ||
        !task.status ||
        !task.priority
      ) {
        setError("Todos los campos son obligatorios.");
      }

      await updateTask(task);
      alert("Tarea actualizada correctamente.");
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  if (!task) {
    return <div className="loading">Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="task-detail-container">
      <div className="task-editor">
        <h1 className="task-title">Task: {task.title}</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Título de la tarea"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Agrega una descripción detallada..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="due_date">Expiration date</label>
            <input
              type="datetime-local"
              id="due_date"
              name="due_date"
              value={task.due_date ? task.due_date.slice(0, 16) : ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">State</label>
            <select
              id="status"
              name="status"
              value={task.status}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un estado</option>
              <option value="pendiente">Pendiente</option>
              <option value="completada">Completada</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={task.priority}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una prioridad</option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="is_archived">Archived</label>
            <input
              type="checkbox"
              id="is_archived"
              name="is_archived"
              checked={task.is_archived === 1}
              onChange={(e) =>
                setTask((prevTask) => ({
                  ...prevTask,
                  is_archived: e.target.checked ? 1 : 0,
                }))
              }
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="save-button">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}
