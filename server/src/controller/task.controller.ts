// server/src/controller/user.controller.ts
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Task } from "../entity/Task";

const taskRepo = AppDataSource.getRepository(Task);

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, updated_at, status, severity } = req.body;
    const task = taskRepo.create({
      title,
      description,
      updated_at,
      status,
      severity,
    });
    await taskRepo.save(task);
    res.status(201).json(task);
  } catch (error) {
    res.status(500);
  }
};

export const getTasks = async (_: Request, res: Response) => {
  const tasks = await taskRepo.find();
  res.json(tasks);
};

export const getTask = async (req: Request, res: Response) => {
  const task = await taskRepo.findOneBy({ id: Number(req.params.id) });
  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }
  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const task = await taskRepo.findOneBy({ id: Number(req.params.id) });
  if (!task) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  taskRepo.merge(task, req.body);
  const result = await taskRepo.save(task);
  res.json(result);
};

export const deleteTask = async (req: Request, res: Response) => {
  const result = await taskRepo.delete(req.params.id);
  res.json(result);
};
