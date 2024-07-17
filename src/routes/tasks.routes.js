import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasks.cotroller.js";

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

export default router;
