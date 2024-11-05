// src/components/CollaborativeInput.tsx

import React, { useState, useEffect } from 'react';

interface CollaborativeInputProps {
  initialText: string;
  onTextChange: (text: string) => void;
}

const CollaborativeInput: React.FC<CollaborativeInputProps> = ({ initialText, onTextChange }) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    onTextChange(text); // Sends updated text to backend or WebSocket
  }, [text, onTextChange]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value); // Updates the local state as the user types
  };

  return (
    <div style={{ padding: '10px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Collaborative Text Editor</h2>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing to collaborate in real time..."
        rows={10}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
    </div>
  );
};

export default CollaborativeInput;
