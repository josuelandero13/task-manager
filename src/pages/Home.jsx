import '../assets/css/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a Task Manager</h1>
        <p>Organiza tus tareas de manera eficiente y sencilla.</p>
      </header>
      <section className="home-features">
        <div className="feature-card">
          <h2>Gestión de Tareas</h2>
          <p>Crea, edita y elimina tareas fácilmente.</p>
        </div>
        <div className="feature-card">
          <h2>Colaboración</h2>
          <p>Trabaja en equipo y comparte tareas con otros.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;