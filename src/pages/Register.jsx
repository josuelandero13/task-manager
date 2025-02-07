import { useState } from "react";
import { register } from "../api/authService";
import { useNavigate } from "react-router-dom";
import "../assets/css/Register.css";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    lastname: "",
    password: "",
    name: "",
  });
  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (params) => {
    params.preventDefault();

    if (!form.email || !form.password || !form.name) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      await register(form);
      navigate("/login");
    } catch {
      setError("Error en el registro");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <h2>Registro</h2>
          {error && <p>{error}</p>}
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Apellido"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <input
            type="file"
            name="avatar"
            placeholder="Imagen de perfil"
            onChange={handleChange}
          />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
