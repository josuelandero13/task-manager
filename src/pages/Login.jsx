import { useState } from "react";
import { login } from "../api/authService";
import { useAuth } from "../../hooks/useAuth";
import "../assets/css/Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { dispatch } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.email || !form.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await login(form);
      if (response.ok) {
        const userData = await response.json();
        dispatch({ type: "LOGIN", payload: userData });
      }
    } catch (error) {
      throw new Error("Error al inisiar session:", error);
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
}
