import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import imageUrl from "../assets/images/logo.png";
import "../assets/css/Navbar.css";


export default function Navbar() {
  const { state, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
  };

  return (
    <nav>
      <div>
        <span>
          <Link className="info-page" to="/">
            <img src={imageUrl} alt="" className="logo" />
            <p className="title">TM</p>
          </Link>
        </span>
        <div>
          {!state.token ? (
            <span className="auth-buttons-container">
              <Link className="button-auth" to="/login">
                LOGIN
              </Link>
              <Link className="button-auth" to="/register">
                REGISTER
              </Link>
            </span>
          ) : (
            <>
              <button className="buttonLogout" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
