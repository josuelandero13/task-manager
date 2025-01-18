import express, { json }  from "express";
import { createUserRouter } from "./routes/users.js";

export const createApp = ({ userModel }) => {
  const app = express();

  app.use(json())
  app.disable("x-powered-by");

  app.use("/users", createUserRouter({ userModel }));

  const PORT = process.env.PORT ?? 1234;

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
  });
};
