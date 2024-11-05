import React, { useEffect, useState } from 'react';

const RealTimeComponent: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    // Establish WebSocket connection
    const socket = new WebSocket('ws://localhost:8080');
    
    // Set the WebSocket connection
    setWs(socket);
    
    // Listen for messages from the server
    socket.onmessage = (event) => {
      const message = event.data;
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    
    // Clean up WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []);
  
  // Send a message to the server
  const sendMessage = () => {
    if (ws) {
      ws.send(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Real-Time Collaboration</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default RealTimeComponent;
