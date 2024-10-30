// import React from 'react';
// import ReactDOM from 'react-dom';
// //mport { createRoot } from 'react-dom/client';
// import App from '../src/App';

// const container = document.getElementById('root') as HTMLElement;
// const root = createRoot(container);
// root.render(<App />);

// src/index.tsx

// import React from 'react';
// import ReactDOM from 'react-dom'; // ReactDOM for React 17
// import { BrowserRouter } from 'react-router-dom'; // React Router for routing
// import App from './App'; // Your root component
// import './index.css'; // Optional: Global CSS or styles

// // Render the App component into the DOM
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Optional, but make sure this file exists if you're importing it

import './styles/variables.css';
import './styles/globals.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

