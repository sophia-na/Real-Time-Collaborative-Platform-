import { Request, Response } from 'express';
import { getAllProjects, createProject, updateProject, deleteProject } from '../services/projectService';

// Fetch all projects
export const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await getAllProjects();
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

// Create a new project
// export const addProject = async (req: Request, res: Response) => {
//     try {
//         const { name, description, participants } = req.body;
//         const newProject = await createProject({ name, description, participants });
//         console.log(`Project created: ${JSON.stringify(newProject)}`); // Log the project to the console
//         res.status(201).json(newProject);
//     } catch (error) {
//         console.error('Error creating project:', error);
//         res.status(500).json({ error: 'Failed to create project' });
//     }
// };

// export const addProject = async (req: Request, res: Response) => {
//     try {
//         const newProject = await createProject(req.body);
//         res.status(201).json(newProject);
//     } catch (error) {
//         console.error('Error creating project:', error); // Log error details
//         res.status(500).json({ error: 'Failed to create project' });
//     }
// };
 

export const addProject = async (req: Request, res: Response) => {
  try {
    const { name, description, participants } = req.body;

    // Validate that the project name is provided
    if (!name) {
      return res.status(400).json({ error: 'Project name is required' });
    }

    const newProject = await createProject({ name, description, participants });
    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Failed to create project' });
  }
};



// Update an existing project
export const modifyProject = async (req: Request, res: Response) => {
    try {
        const projectId = Number(req.params.id);
        const { name, description, participants } = req.body;
        const updatedProject = await updateProject(projectId, { name, description, participants });
        res.json(updatedProject);
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ error: 'Failed to update project' });
    }
};

// Delete a project
export const removeProject = async (req: Request, res: Response) => {
    try {
        const projectId = Number(req.params.id);
        await deleteProject(projectId);
        res.status(204).send(); // No content to return after deletion
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ error: 'Failed to delete project' });
    }
};
