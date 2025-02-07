import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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
        <Link className="title" to="/">
          Task Manager
        </Link>
        <div>
          {!state.token ? (
            <>
              <Link className="button" to="/login">
                Login
              </Link>
              <Link className="button" to="/register">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link className="button" to="/dashboard">
                Dashboard
              </Link>
              <button className="button" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
