import * as taskRepository from "../repositories/taskRepository.js";

export const createTask = async (taskData) => {
  try {
    const task = await taskRepository.createTask(taskData);
    return task;
  } catch (error) {
    console.error("Error creating task:", error);
    throw new Error("Error creating task");
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const task = await taskRepository.updateTask(id, taskData);

    if (!task) {
      throw new Error("Task not found");
    }

    return task;
  } catch (error) {
    console.error("Error updating task:", error);
    throw new Error("Error updating task");
  }
};

export const deleteTask = async (id) => {
  try {
    const result = await taskRepository.deleteTask(id);

    if (result.affectedRows === 0) {
      throw new Error("Task not found or could not be deleted");
    }

    return result;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw new Error("Error deleting task");
  }
};

export const fetchAllTasks = async () => {
  try {
    return await taskRepository.fetchAllTasks();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error("Error fetching tasks");
  }
};

export const fetchTaskById = async (id) => {
  try {
    return await taskRepository.fetchTaskById(id);
  } catch (error) {
    console.error("Error fetching task by ID:", error);
    throw new Error("Error fetching task");
  }
};
