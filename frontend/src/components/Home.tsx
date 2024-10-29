// // export default Home;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home: React.FC = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:3001/api/data')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//     <header>
//       <h1>Real-Time Collaborative Platform</h1>
//       <p>Welcome to your workspace dashboard. Here, you can manage and join projects.</p>
//     </header>
//     <section>
//       <h2>Active Projects</h2>
//       <ul>
//         {/* Placeholder for dynamic project data */}
//         <li>Project Alpha - Last updated: 5 mins ago</li>
//         <li>Project Beta - Last updated: 20 mins ago</li>
//       </ul>
//     </section>
//     <section>
//       <h2>Create a New Project</h2>
//       <button>Create Project</button>
//     </section>
//   </div>   
//   );
// };

// export default Home;
// src/pages/Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <header>
        <h1>Welcome to the Real-Time Collaborative Platform</h1>
        <p>A space for seamless, real-time collaboration on shared projects.</p>
      </header>
      <section style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button style={{ padding: '10px 20px', margin: '10px' }}>Log In</button>
        </Link>
        <Link to="/signup">
          <button style={{ padding: '10px 20px', margin: '10px' }}>Sign Up</button>
        </Link>
        <Link to="/dashboard">
          <button style={{ padding: '10px 20px', margin: '10px' }}>Go to Dashboard</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
