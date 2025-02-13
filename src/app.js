import express, { json } from "express";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
import authRouter from "./routes/authRoutes.js";
import { errorHandler } from "../src/middlewares/errorHandler.js";
import cookieParser from "cookie-parser";
import { corsMiddleware } from "./middlewares/corsMiddleware.js";

const app = express();

app.use(json());
app.use(corsMiddleware())
app.use(cookieParser());
app.disable("x-powered-by");

app.use("/", authRouter);

app.use("/users", userRouter);

app.use("/tasks", taskRouter);

app.use(errorHandler);

export default app;
