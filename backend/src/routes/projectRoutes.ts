import express from 'express';
import { getAllProjects, createProject, updateProject, deleteProject } from '../services/projectService';

const projectRoutes = express.Router();

projectRoutes.get('/', async (_req, res) => {
  try {
    const projects = await getAllProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// projectRoutes.post('/', async (req, res) => {
//   try {
//     const newProject = await createProject(req.body);
//     res.status(201).json(newProject);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create project' });
//   }
// });


projectRoutes.post('/', async (req, res) => {
  try {
    const newProject = await createProject(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
});


projectRoutes.put('/:id', async (req, res) => {
  try {
    const updatedProject = await updateProject(Number(req.params.id), req.body);
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
});

projectRoutes.delete('/:id', async (req, res) => {
  try {
    await deleteProject(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

export default projectRoutes;
