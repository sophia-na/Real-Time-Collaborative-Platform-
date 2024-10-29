// src/ButtonPage.tsx

import React from 'react';
import Button from './components/Button';

const ButtonPage: React.FC = () => {
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <Button onClick={handleClick} label="Click Me" />
  );
};

export default ButtonPage;
