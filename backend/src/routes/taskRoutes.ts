import express, { Router } from 'express';
import TaskController from '../controllers/taskController';

//const router = Router();

// Define routes and map them to controller actions

// // GET /tasks - Fetch all tasks
// router.get('/', TaskController.getTasks);

// // POST /tasks - Create a new task
// router.post('/', TaskController.createTask);

// // PUT /tasks/:id - Update a task by ID
// router.put('/:id', TaskController.updateTask);

// // DELETE /tasks/:id - Delete a task by ID
// router.delete('/:id', TaskController.deleteTask);


// class taskRoutes {


// }

// export default new taskRoutes();


const taskRoutes = express.Router();

// Define your routes here
taskRoutes.get('/', (_req, res) => {
  res.send('Tasks route');
});

export default taskRoutes;
