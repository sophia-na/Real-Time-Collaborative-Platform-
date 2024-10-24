// export default new TaskController();
import { Request, Response } from 'express';
import { getAllTasks, createTask, updateTask, deleteTask } from '../services/taskService';

class TaskController {
  async getAllTasksHandler(req: Request, res: Response) {
    try {
      const tasks = await getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tasks', error });
    }
  }

  async createTaskHandler(req: Request, res: Response) {
    try {
      const { title, description } = req.body;
      const newTask = await createTask({ title, description });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: 'Error creating task', error });
    }
  }

  async updateTaskHandler(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const updatedTask = await updateTask(id, { title, description });
      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: 'Error updating task', error });
    }
  }

  async deleteTaskHandler(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await deleteTask(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting task', error });
    }
  }
}

// Keep using default export for the entire controller class
export default new TaskController();
