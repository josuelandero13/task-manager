# Task Manager

## 📝 Descripción
Task Manager es una aplicación de gestión de tareas desarrollada con **React** (Frontend), **Node.js** y **Express.js** (Backend). Permite a los usuarios crear, editar, eliminar y gestionar tareas de manera eficiente.

## 🚀 Tecnologías utilizadas

### **Frontend** (React + Vite)
- React.js
- Vite
- React Router Dom

### **Backend** (Node.js + Express)
- Node.js
- Express.js
- MySQL como base de datos
- CORS (para permitir comunicación entre frontend y backend)
- Zod (para validar los datos enviados por el frontend)

## 📂 Estructura del Proyecto

```
📦 task-manager
├── 📂 backend
│   ├── 📂 repositories
│   ├── 📂 services
│   ├── 📂 routes
│   ├── 📂 controllers
│   ├── server.js
│   ├── package.json
│
├── 📂 frontend
│   ├── 📂 src
│   │   ├── 📂 assets
│   │   ├── 📂 hooks
│   │   ├── 📂 components
│   │   ├── 📂 services
│   │   ├── 📂 pages
│   │   ├── main.jsx
│   │   ├── App.jsx
│   ├── package.json
│
├── README.md
```

## 🛠 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/josuelandero13/task-manager.git
cd task-manager
pnpm install
```

### 2️⃣ Configurar el Backend (Node.js + Express)
```bash
cd backend
npm install
```

Crear un archivo `.env` en la carpeta `backend`:
```
DB_USER=<tu_usuario>
DB_PASSWORD=<tu_contraseña>
DB_HOST="localhost"
DB_NAME="task_manager"
DB_PORT="3306"
AUTH_SECRET=<tu_token_secreto>
```

Iniciar el servidor:
```bash
pnpm run dev
```

### 3️⃣ Configurar el Frontend (React)
```bash
cd ../frontend
pnpm install
```

Crear un archivo `.env` en la carpeta `frontend`:
```
VITE_API_URL=http://localhost:1234
```

Iniciar la aplicación React:
```bash
pnpm run dev
```

## 📜 Licencia
Este proyecto está bajo la licencia MIT.

---

¡Listo! Ahora puedes comenzar a desarrollar y mejorar el proyecto. ¡Buena suerte! 🚀
