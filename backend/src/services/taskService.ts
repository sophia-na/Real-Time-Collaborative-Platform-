import Task from '../models/taskModel';

class TaskService {
    async createTask(taskData: { title: string; description: string }) {
        const newTask = await Task.create(taskData);
        return newTask;
    }

    async getAllTasks() {
        const tasks = await Task.findAll();
        return tasks;
    }
}

export default new TaskService();
