import Project from '../models/projectModel';

// Fetch all projects
export const getAllProjects = async () => {
    return await Project.findAll();
};

// Create a new project
// export const createProject = async (projectData: { name: string; description: string; participants: string[] }) => {
//     return await Project.create(projectData);
// };

export const createProject = async (projectData: { name: string; description: string; participants?: string[] }) => {
    try {
        const project = await Project.create(projectData);
        return project;
    } catch (error) {
        console.error('Error creating project:', error); // Add error logging here
        throw new Error('Failed to create project');
    }
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
