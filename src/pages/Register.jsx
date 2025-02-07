import { useState } from "react";
import { register } from "../api/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    <div>
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
