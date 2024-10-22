import { Request, Response } from 'express';
import TaskService from '../services/taskService';

class TaskController {
    async createTask(req: Request, res: Response): Promise<Response> {
        try {
            const { title, description } = req.body;
            const newTask = await TaskService.createTask({ title, description });
            return res.status(201).json(newTask);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to create task' });
        }
    }

    async getTasks(req: Request, res: Response): Promise<Response> {
        try {
            const tasks = await TaskService.getAllTasks();
            return res.status(200).json(tasks);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch tasks' });
        }
    }
}

export default new TaskController();