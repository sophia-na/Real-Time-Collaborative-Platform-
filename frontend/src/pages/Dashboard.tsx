// // // src/pages/Dashboard.tsx

// import React, { useState } from 'react';
// import ProjectForm from '../components/forms/ProjectForm';

// const Dashboard: React.FC = () => {
//   const [isCreatingProject, setIsCreatingProject] = useState(false);

//   const handleCreateProjectClick = () => {
//     setIsCreatingProject(true);
//   };

//   const handleProjectSubmit = (project: { name: string; description: string; participants?: string[] }) => {
//     console.log('Project Created:', project);
//     // API call to create the project could go here
//     setIsCreatingProject(false);
//   };

//   const handleCancel = () => {
//     setIsCreatingProject(false);
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {!isCreatingProject ? (
//         <button onClick={handleCreateProjectClick}>Create Project</button>
//       ) : (
//         <ProjectForm onSubmit={handleProjectSubmit} onCancel={handleCancel} />
//       )}
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useEffect, useState } from 'react';
// import { fetchProjects, createProject } from '../services/projectService';

// const Dashboard: React.FC = () => {
//   const [projects, setProjects] = useState<any[]>([]);
//   const [newProjectName, setNewProjectName] = useState('');
//   const [newProjectDescription, setNewProjectDescription] = useState('');

//   // Fetch projects on component mount
//   useEffect(() => {
//     fetchProjects()
//       .then(setProjects)
//       .catch((error) => console.error('Failed to fetch projects:', error));
//   }, []);

//   // Handler to create a new project
//   const handleCreateProject = async () => {
//     try {
//       const newProject = await createProject({
//         name: newProjectName,
//         description: newProjectDescription,
//         participants: [],
//       });
//       setProjects([...projects, newProject]); // Update state to show new project
//       setNewProjectName(''); // Reset input fields
//       setNewProjectDescription('');
//     } catch (error) {
//       console.error('Failed to create project:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Project Dashboard</h1>
//       <ul>
//         {projects.map((project) => (
//           <li key={project.id}>{project.name}</li>
//         ))}
//       </ul>

//       {/* Form to create a new project */}
//       <input
//         type="text"
//         placeholder="Project Name"
//         value={newProjectName}
//         onChange={(e) => setNewProjectName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Project Description"
//         value={newProjectDescription}
//         onChange={(e) => setNewProjectDescription(e.target.value)}
//       />
//       <button onClick={handleCreateProject}>Create Project</button>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await api.get('/projects'); // Fetch all projects
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleCreateProject = async () => {
    if (!newProjectName.trim()) { // Check that newProjectName is not empty
      alert('Project name is required');
      return;
    }

    try {
      const response = await api.post('/projects', {
        name: newProjectName,  // Ensure this value is provided
        description: newProjectDescription,
        participants: [],
      });
      const newProject = response.data;
      setProjects([...projects, newProject]);
      setSuccessMessage(`Project "${newProject.name}" created with ID ${newProject.id}`);
      setNewProjectName('');
      setNewProjectDescription('');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };


  return (
    <div>
      <h1>Project Dashboard</h1>

      {/* Display success message */}
      {successMessage && <p>{successMessage}</p>}

      {/* Display list of projects */}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name} (ID: {project.id})</li>
        ))}
      </ul>

      {/* Form to create a new project */}
      <div>
        <input
          type="text"
          placeholder="Project Name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Project Description"
          value={newProjectDescription}
          onChange={(e) => setNewProjectDescription(e.target.value)}
        />
        <button onClick={handleCreateProject}>Create Project</button>
      </div>
    </div>
  );
};

export default Dashboard;
