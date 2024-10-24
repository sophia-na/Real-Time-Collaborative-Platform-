import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

// Function to initialize WebSocket
export const initializeWebSocket = (server: http.Server) => {
  const wss = new WebSocketServer({ server });

  // Handle new WebSocket connections
  wss.on('connection', (ws) => {
    console.log('New WebSocket connection established');

    // Listen for messages from the client
    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);
      // Broadcast the message to all connected clients
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message.toString());
        }
      });
    });

    // Handle WebSocket close event
    ws.on('close', () => {
      console.log('WebSocket connection closed');
    });
  });

  console.log('WebSocket server is running');
};
