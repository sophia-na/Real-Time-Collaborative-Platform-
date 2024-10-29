// // src/pages/Dashboard.tsx

import React, { useState } from 'react';
import ProjectForm from './components/ProjectForm';
 



const Dashboard: React.FC = () => {
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  const handleCreateProjectClick = () => {
    setIsCreatingProject(true);
  };

  const handleProjectSubmit = (project: { name: string; description: string; participants?: string[] }) => {
    console.log('Project Created:', project);
    // API call to create the project could go here
    setIsCreatingProject(false);
  };

  const handleCancel = () => {
    setIsCreatingProject(false);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {!isCreatingProject ? (
        <button onClick={handleCreateProjectClick}>Create Project</button>
      ) : (
        <ProjectForm onSubmit={handleProjectSubmit} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default Dashboard;
