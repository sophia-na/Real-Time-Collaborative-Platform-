// ProjectsPage.tsx
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from './types'; // Define and import Project type if not done already

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3001/api/projects');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="projects-list" color='red'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
