import { useNavigate } from "react-router-dom";
import "../../assets/css/home/AuthenticationModal.css";

export default function AuthenticationModal({ handleShowAuthModal }) {
  const navigate = useNavigate();

  return (
    <section className="auth-modal-overlay" onClick={handleShowAuthModal}>
      <div
        className="auth-modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="auth-modal-close" onClick={handleShowAuthModal}>
          &times;
        </button>

        <div className="auth-modal-header">
          <svg className="auth-modal-icon" viewBox="0 0 24 24">
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>

          <h3>Acceso Requerido</h3>
        </div>

        <p className="auth-modal-message">
          To access this functionality you need to have an account. Register in
          less than 1 minute and enjoy all the benefits!
        </p>

        <div className="auth-modal-buttons">
          <button
            className="auth-modal-button primary"
            onClick={() => navigate("/register")}
          >
            Crear Cuenta
          </button>
          <button
            className="auth-modal-button"
            onClick={() => navigate("/login")}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </section>
  );
}
