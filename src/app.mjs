import express from "express";
import db from "../db.mjs";

const app = express();
const port = process.env.PORT || 3000;

// Middleware (optional)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
