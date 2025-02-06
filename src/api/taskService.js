import { apiFetch } from "./apiClient";

export const getTasks = async () => {
    return apiFetch("/tasks", { method: "GET" });
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
