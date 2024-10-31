import express, { Router } from "express";
import { getAllTasks } from "../services/taskService";
import { createTask, updateTask, deleteTask } from "../services/taskService";

const taskRoutes = express.Router();
//Define routes and map them to controller actions

// Define your routes here
taskRoutes.get("/", (_req, res) => {
  res.send("Tasks route");
});

taskRoutes.get("/", async (_req, res) => {
  try {
    const tasks = await getAllTasks(); // You would call a service to get tasks from the database.
    res.json(tasks); // Sends tasks in JSON format.
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

//GET /tasks - Fetch all tasks
taskRoutes.post("/", async (req, res) => {
  try {
    const newTask = await createTask(req.body); // req.body contains task data sent from the client.
    res.status(201).json(newTask); // Responds with the created task and 201 status.
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

taskRoutes.put("/:id", async (req, res) => {
  try {
    const updatedTask = await updateTask(req.params.id, req.body); // req.params.id is the task ID to update.
    res.json(updatedTask); // Responds with the updated task.
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

taskRoutes.delete("/:id", async (req, res) => {
  try {
    await deleteTask(req.params.id); // req.params.id is the task ID to delete.
    res.status(204).send(); // Responds with 204 No Content after successful deletion.
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

//GET /tasks - Fetch all tasks
taskRoutes.post('/projects', (req, res) => {
  const { name, description, participants } = req.body;
  // Save project to the database (example code)
  res.status(201).json({ message: 'Project created successfully' });
});

// taskRoutes.get('/api/data', (req, res) => {
//   // Example data you might send back
//   const data = {
//     id: 1,
//     name: 'Example Data',
//     description: 'This is some sample data from the backend.'
//   };
  
//   res.json(data); // Send the data as JSON response
// });

export default taskRoutes;
