const apiUrl = import.meta.env.VITE_API_URL;

export const getAllTasks = async () => {
  const res = await fetch(`${apiUrl}/tasks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const tasks = await res.json();
  return tasks;
};

export const updateTask = async (datatTask) => {
  const res = await fetch(`${apiUrl}/tasks/${datatTask.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "category_id": 1,
      "created_at": "2025-02-26T23:45:24.000Z",
      "description": "Completar el reporte anual para el cliente conforme los datos de contabulidad y demas de la empresa.",
      "due_date": "2025-02-28T19:00",
      "id": 7,
      "is_archived": 0,
      "priority": "media",
      "status": "pendiente",
      "title": "Finalizar reporte Editado",
      "updated_at": "2025-02-26T23:45:24.000Z",
      "user_id": 1
    }
    ),
  });
  console.log(res);
  if (!res.ok) {
    throw new Error("No se pudo actualizar la tarea");
  }
  return res.json();
};

export const createTask = async (taskData) => {
  return apiFetch("/tasks", {
    method: "POST",
    body: JSON.stringify(taskData),
  });
};

export const deleteTask = async (taskId) => {
  return apiFetch(`/tasks/${taskId}`, { method: "DELETE" });
};
