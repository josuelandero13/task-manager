import '../assets/css/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to task manager</h1>
        <p>Organize your tasks efficiently and easily.</p>
      </header>
      <section className="home-features">
        <div className="feature-card">
          <h2>Task Management</h2>
          <p>Create, edit and delete tasks easily.</p>
        </div>
        <div className="feature-card">
          <h2>Collaboration</h2>
          <p>Work as a team and share tasks with others.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;