import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch projects on component mount
  // useEffect(() => {
  //   fetchProjects();
  // }, []);

  // const fetchProjects = async () => {
  //   try {
  //     const response = await api.get('/projects'); // Fetch all projects
  //     setProjects(response.data);
  //     }
  //     const data = await response.json();
  //     setProjects(data); // Assuming the API response is an array of projects
  //   } catch (error) {
  //     console.error('Error fetching projects:', error);
  //   }
  // };
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/projects');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data: Project[] = await response.json(); // Specify that data is an array of Project
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  type Project = {
    id: number; // or string, depending on your API
    name: string;

  };

  function ProjectList({ projects }: { projects: Project[] }) {
    return (
      <div>
        {/* <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul> */}
      </div>
    );
  }


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
      {/* <h3>Project Dashboard</h3> */}

      {/* Display success message */}
      {successMessage && <p>{successMessage}</p>}

      {/* Display list of projects */}
      {/* <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name} (ID: {project.id})</li>
        ))}
      </ul> */}

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
        {/* <ProjectList projects={projects} /> */}
      </div>
    </div>
  );
};

export default Dashboard;


