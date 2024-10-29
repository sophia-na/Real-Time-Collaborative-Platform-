// src/pages/Dashboard.tsx

import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <header>
        <h1>Real-Time Collaborative Platform</h1>
        <p>Welcome to your workspace dashboard. Here, you can manage and join projects.</p>
      </header>
      <section>
        <h2>Active Projects</h2>
        <ul>
          {/* Placeholder for dynamic project data */}
          <li>Project Alpha - Last updated: 5 mins ago</li>
          <li>Project Beta - Last updated: 20 mins ago</li>
        </ul>
      </section>
      <section>
        <h2>Create a New Project</h2>
        <button>Create Project</button>
      </section>
    </div>
  );
};

export default Dashboard;

// src/pages/Dashboard.tsx
// import React from 'react';
// import ProjectCard from './components/ProjectCard';

// const Dashboard: React.FC = () => {
//   return (
//     <div>
//       <h2>Active Projects</h2>
//       <ProjectCard name="Project Alpha" lastUpdated="5 mins ago" />
//       <ProjectCard name="Project Beta" lastUpdated="20 mins ago" />
//     </div>
//   );
// };

// export default Dashboard;
