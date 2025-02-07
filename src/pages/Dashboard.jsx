import { useState } from 'react';
import '../assets/css/Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Revisar correos', completed: false },
    { id: 2, title: 'Preparar presentación', completed: true },
    { id: 3, title: 'Hacer ejercicio', completed: false },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Panel de Control</h1>
        <p>Gestiona tus tareas diarias.</p>
      </header>

      <section className="task-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="task-card"
            onClick={() => toggleTaskCompletion(task.id)}
          >
            <h2>{task.title}</h2>
            <p>{task.completed ? 'Completada' : 'Pendiente'}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;