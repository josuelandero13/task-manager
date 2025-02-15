import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import imageUrl from "../assets/images/logo.png";
import { useState } from "react";
import "../assets/css/Navbar.css";

export default function Navbar() {
  const { state, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <Link className="brand" to="/">
          <img src={imageUrl} alt="Logo" className="logo" />
          <span className="title">TM</span>
        </Link>

        <div className="nav-links">
          {!state.token ? (
            <div className="auth-buttons">
              <Link className="auth-link" to="/login">
                LOGIN
              </Link>
              <Link className="auth-link" to="/register">
                REGISTER
              </Link>
            </div>
          ) : (
            <button className="logout-btn" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          )}
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú mobile */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {!state.token ? (
          <>
            <Link
              className="mobile-link"
              to="/login"
              onClick={() => setIsMenuOpen(false)}
            >
              LOGIN
            </Link>
            <Link
              className="mobile-link"
              to="/register"
              onClick={() => setIsMenuOpen(false)}
            >
              REGISTER
            </Link>
          </>
        ) : (
          <button className="mobile-logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        )}
      </div>
    </nav>
  );
}
