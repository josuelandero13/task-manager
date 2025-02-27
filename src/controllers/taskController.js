import { validateTaskUpdate } from "../schemas/taskSchema.js";
import * as taskService from "../services/taskService.js";

export const createTask = async (req, res) => {
  try {
    const validatedData = taskSchema.parse(req.body);

    const task = await taskService.createTask(validatedData);

    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    }

    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const validatedData =  validateTaskUpdate(req.body);

    if (validatedData) {
      return res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    }

    const task = await taskService.updateTask(req.params.id, validatedData);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const result = await taskService.deleteTask(req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.fetchAllTasks();

    if (tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }

    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await taskService.fetchTaskById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
