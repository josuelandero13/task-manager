const apiUrl = import.meta.env.VITE_API_URL;

export const getTasks = async () => {
  const res = await fetch(`${apiUrl}/tasks`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
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
