// ProjectCard.tsx
import React from 'react';
import { Project } from './types';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {/* Display other project details here as needed */}
    </div>
  );
};

export default ProjectCard;
