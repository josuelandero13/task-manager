import { Router } from "express";
import { UserController } from "../controllers/users.js";

export const createUserRouter = ({ userModel }) => {
  const userRouter = Router();

  const userController = new UserController({ userModel });

  userRouter.get("/", userController.getAll);

  return userRouter;
};
