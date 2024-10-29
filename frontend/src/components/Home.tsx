// // src/components/Home.tsx

// import React from 'react';

// const Home: React.FC = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <p>This is the homepage of your React app!</p>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Home Page Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
