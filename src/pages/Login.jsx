import { useState } from "react";
import { login } from "../api/authService";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", last_name: "", password: "", profile_picture: "" });
  const [error, setError] = useState("");
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.email || !form.password || !form.last_name) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const data = await login(form);
      dispatch({ type: "LOGIN", payload: data });
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          {error && <p>{error}</p>}
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
