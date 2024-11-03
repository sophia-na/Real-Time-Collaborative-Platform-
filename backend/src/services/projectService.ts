import Project from '../models/projectModel';

// Fetch all projects
export const getAllProjects = async () => {
    return await Project.findAll();
};

// Create a new project
export const createProject = async (projectData: { name: string; description: string; participants: string[] }) => {
    return await Project.create(projectData);
};

// Update an existing project
export const updateProject = async (id: number, projectData: { name?: string; description?: string; participants?: string[] }) => {
    const project = await Project.findByPk(id);
    if (project) {
        return await project.update(projectData);
    }
    throw new Error('Project not found');
};

// Delete a project
export const deleteProject = async (id: number) => {
    const project = await Project.findByPk(id);
    if (project) {
        await project.destroy();
    } else {
        throw new Error('Project not found');
    };
}
