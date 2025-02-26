import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';
import { getTasks } from '../services/task.js';
import '../assets/css/Dashboard.css';

export default function Dashboard () {
  const fetchTasks = async () => {
    const response = await getTasks();
    const tasks = await response.json();
    return tasks;
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Tasks</h1>
        <p>Gestiona tus tareas diarias.</p>
      </header>

      <TaskForm />

      <section className="task-list">
        {/* {fetchTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))} */}
      </section>
    </div>
  );
};
