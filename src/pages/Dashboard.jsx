import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';
import '../assets/css/Dashboard.css';

export default function Dashboard () {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Revisar correos', completed: false },
    { id: 2, title: 'Preparar presentación', completed: true },
    { id: 3, title: 'Hacer ejercicio', completed: false },
  ]);

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, title) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title } : task
      )
    );
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Panel de Control</h1>
        <p>Gestiona tus tareas diarias.</p>
      </header>

      <TaskForm onAddTask={addTask} />

      <section className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleCompletion={toggleTaskCompletion}
            onDeleteTask={deleteTask}
            onUpdateTask={updateTask}
          />
        ))}
      </section>
    </div>
  );
};
