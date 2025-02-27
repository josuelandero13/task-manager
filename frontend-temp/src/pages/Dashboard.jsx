import { useEffect, useState } from 'react';
import TaskForm from '../components/tasks/TaskForm';
import TaskCard from '../components/tasks/TaskCard';
import { getAllTasks } from '../services/task';
import '../assets/css/Dashboard.css';

export default function Dashboard () {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getAllTasks();
        setTasks(tasks);
      } catch (error) {
        setError(error);
      }
    };

    fetchTasks();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Tasks</h1>
        <p>Gestiona tus tareas diarias.</p>
      </header>

      <TaskForm />

      <section className="task-list">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </div>
  );
}
