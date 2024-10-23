// import WebSocket, { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({ port: 8080 });

// // Broadcast message to all connected clients
// const broadcast = (data: string) => {
//   wss.clients.forEach((client) => {
//     if (client.readyState === WebSocket.OPEN) {
//       client.send(data);
//     }
//   });
// };

// // Listen for WebSocket connections
// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   // Listen for messages from the client
//   ws.on('message', (message) => {
//     console.log(`Received message: ${message}`);
    
//     // Broadcast the message to all other clients
//     broadcast(message.toString());
//   });

//   // Handle WebSocket close
//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

//export default wss;

const NodeWebSocket = require('ws');  // Alias the Node.js WebSocket implementation

// Create a WebSocket client
const ws = new NodeWebSocket('ws://localhost:8080');

// Listen for the open event (connection established)
ws.on('open', () => {
  console.log('Connected to WebSocket server');
  ws.send('Hello Server!');
});

// Listen for messages from the server
ws.on('message', (data: any) => {
  console.log(`Received message from server: ${data}`);
});

// Handle connection close
ws.on('close', () => {
  console.log('Disconnected from WebSocket server');
});
