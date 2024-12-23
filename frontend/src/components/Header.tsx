// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <h1>Real-Time Collaborative Platform</h1>
      <nav>
        <a href="/dashboard">Dashboard</a> | <a href="/projectcard">Projects</a> | <a href="/collaborativeinput">Collaborativeinput</a>
      </nav>
    </header>
  );
};

export default Header;
