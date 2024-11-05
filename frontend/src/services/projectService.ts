import api from './api';

// Fetch all projects
export const fetchProjects = async () => {
    const response = await api.get('/projects');
    return response.data;
};

// Create a new project
export const createProject = async (projectData: { name: string; description: string; participants: string[] }) => {
    const response = await api.post('/projects', projectData);
    return response.data;
};

// Update an existing project
export const updateProject = async (id: number, projectData: { name?: string; description?: string; participants?: string[] }) => {
    const response = await api.put(`/projects/${id}`, projectData);
    return response.data;
};

// Delete a project
export const deleteProject = async (id: number) => {
    await api.delete(`/projects/${id}`);
};
