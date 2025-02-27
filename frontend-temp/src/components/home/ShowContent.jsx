import { useState, useEffect } from "react";
import AuthenticationModal from "./AuthenticationModal";
import { verifyAuth } from "../../services/authentication.js";
import "../../assets/css/home/ShowContent.css";

export default function ShowContent() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleLinkClick = async (event) => {
    const isAuthenticated = await verifyAuth();

    if (!isAuthenticated.ok) {
      event.preventDefault();
      setShowAuthModal(true);
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setShowAuthModal(false);
    };

    if (showAuthModal) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showAuthModal]);

  return (
    <>
      <header className="home-header">
        <h1>Transform your productivity</h1>
        <p>
          Organize, prioritize and collaborate on your projects intelligently.
        </p>
      </header>

      <section className="home-features">
        <div className="feature-card">
          <h2>Manage tasks</h2>
          <p>Create, edit and delete tasks easily.</p>
          <button onClick={handleLinkClick}>See</button>
        </div>

        <div className="feature-card">
          <h2>Collaboration</h2>
          <p>Work as a team and share tasks with others.</p>
        </div>
      </section>

      {showAuthModal && (
        <AuthenticationModal
          handleShowAuthModal={() => setShowAuthModal(false)}
        />
      )}
    </>
  );
}
