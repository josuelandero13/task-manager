import { Router } from "express";
import * as userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", userController.getAll);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.createUser);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
