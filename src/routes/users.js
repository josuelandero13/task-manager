import { Router } from "express";
import { UserController } from "../controllers/users.js";

export const createUserRouter = ({ userModel }) => {
  const userRouter = Router();

  const userController = new UserController({ userModel });

  userRouter.get("/", userController.getAll);
  userRouter.post("/", userController.createUser);
  userRouter.patch("/:id", userController.updateUser);

  return userRouter;
};
