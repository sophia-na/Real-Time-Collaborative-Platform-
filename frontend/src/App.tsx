import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Dashboard from './Dashboard';
import Button from './components/Button';
//import ButtonPage from './components/Button';

import CollaborativeInput  from'./components/CollaborativeInput';
 
 


const ProjectCardPage: React.FC = () => (
  <ProjectCard name="Example Project" lastUpdated="10 mins ago" />
);
// const ButtonPage: React.FC = () => (
//   <Button  onClick={handleClick()} label= "label"/>
// );
 
 
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="header" element={<Header />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projectcard" element={<ProjectCardPage />} /> {/* Use the wrapper here */}
        {/* <Route path="button" onClick={handleClick} label="Cick Me" element={<ButtonPage />} /> */}
         <Route path="collaborativeinput" element={<CollaborativeInput initialText="Start typing..." onTextChange={(text) => console.log(text)} />} />
        <Route path='header' element={Header}/>

      </Routes>
    </Router>
  );
};

export default App;
