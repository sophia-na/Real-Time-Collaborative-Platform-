// src/components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  name: string;
  lastUpdated: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, lastUpdated }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
      <h3>{name}</h3>
      <p>Last Updated: {lastUpdated}</p>
    </div>
  );
};

export default ProjectCard;

// src/components/ProjectCard.tsx
// import React from 'react';

// interface ProjectCardProps {
//   name: string;
//   lastUpdated: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ name, lastUpdated }) => {
//   return (
//     <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
//       <h3>{name}</h3>
//       <p>Last Updated: {lastUpdated}</p>
//     </div>
//   );
// };

// export default ProjectCard;
