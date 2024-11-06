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
      {/* <h1>Projects</h1> */}
      {data.length > 0 ? (
        <ul>
          {/* {data.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))} */}
        </ul>
      ) : (
        <p>No projects available</p>
      )}
    </div>
  );
};

export default Home;
