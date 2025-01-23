import express, { json } from "express";
import userRouter from "./routes/users.js";
import { errorHandler } from "../src/middlewares/errorHandler.js";

const app = express();

app.use(json());
app.disable("x-powered-by");

app.use("/users", userRouter);

app.use(errorHandler);

export default app;
