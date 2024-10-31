import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Dashboard from './Dashboard';
import CollaborativeInput from './components/CollaborativeInput';
import Login from './components/forms/Login';
import SignUp from './components/forms/SignUp';
import Footer from './components/Footer';
import './App.css';


const ProjectCardPage: React.FC = () => (
  <ProjectCard name="Example Project" lastUpdated="10 mins ago" />
);

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
      </nav>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projectcard" element={<ProjectCardPage />} /> {/* Use the wrapper here */}
            <Route path="collaborativeinput" element={<CollaborativeInput initialText="Start typing..." onTextChange={(text) => console.log(text)} />} />
            <Route path="login" element={<Login />} />   {/* Use <Login /> */}
            <Route path="signup" element={<SignUp />} /> {/* Use <SignUp /> */}
            {/* <Route path='projectcard' element={ProjectCard}/> */}

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
