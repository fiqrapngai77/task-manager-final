import express from "express";
import taskRoutes from "./routes/task.routes";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/tasks", taskRoutes);

export default app;
