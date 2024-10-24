import express, { Application } from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import sequelize from './services/database'
import http from 'http';
import { initializeElasticSearch } from './services/elasticsearch';
import { initializeWebSocket } from './websocket';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/tasks', taskRoutes);

// Database connection
sequelize.sync().then(() => {
    console.log('Database connected successfully');
    // app.listen(port, () => {
    //     console.log(`Server running on port ${port}`);
    // });
}).catch((error:any) => {
    console.log('Failed to connect to the database:', error);
});


//const app = express();
//const PORT = process.env.PORT || 3001;

// Your API routes can go here
app.use(express.json());

// Create HTTP server (necessary for WebSocket)
const server = http.createServer(app);

// Initialize Elasticsearch
initializeElasticSearch().then(() => {
  console.log('Elasticsearch initialized');
}).catch((err) => {
  console.error('Error initializing Elasticsearch:', err);
});

// Initialize WebSocket
initializeWebSocket(server); // Pass the HTTP server to WebSocket initializer

// Start the server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
