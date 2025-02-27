import { Router } from "express";
import * as taskController from "../controllers/taskController.js";

const taskRouter = Router();

taskRouter.get("/", taskController.getAllTasks);
taskRouter.get("/:id", taskController.getTaskById);
taskRouter.post("/", taskController.createTask);
taskRouter.patch("/:id", taskController.updateTask);
taskRouter.delete("/:id", taskController.deleteTask);

export default taskRouter;
