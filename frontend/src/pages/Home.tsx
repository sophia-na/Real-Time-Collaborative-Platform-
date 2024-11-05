// // export default Home;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import api from '../services/api';


// const Home: React.FC = () => {
//   const [data, setData] = useState(null);


//   useEffect(() => {
//     api.get('/projects')  // Adjust endpoint as needed
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <header>
//         <h1>Welcome to the Real-Time Collaborative Platform</h1>
//         <p>A space for seamless, real-time collaboration on shared projects.</p>
//       </header>
//       <section style={{ marginTop: '20px' }}>
//         <Link to="/login">
//           <button style={{ padding: '10px 20px', margin: '10px' }}>Log In</button>
//         </Link>
//         <Link to="/signup">
//           <button style={{ padding: '10px 20px', margin: '10px' }}>Sign Up</button>
//         </Link>
//         <Link to="/dashboard">
//           <button style={{ padding: '10px 20px', margin: '10px' }}>Go to Dashboard</button>
//         </Link>
//       </section>
//     </div>

//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import api from '../services/api'; // This should be correctly set up to point to the backend URL

const Home: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api.get('/projects')  // This points to 'http://localhost:3001/api/projects'
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      ) : (
        <p>No projects available</p>
      )}
    </div>
  );
};

export default Home;
