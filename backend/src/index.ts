import express, { Application } from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes";
import sequelize from "./services/database";
import http from "http";
import { initializeElasticSearch } from "./services/elasticsearch";
import { initializeWebSocket } from "./websocket";
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes';

// Load environment variables from .env file
dotenv.config();

import cors from 'cors';
const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes

//app.use(cors());

// app.use(cors({
//   origin: process.env.CORS_ORIGIN,
// }));

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Allow frontend URL
  methods: 'GET,POST,PUT,DELETE',   // Allow common HTTP methods
  //credentials: true,                // Allow credentials if needed
}));



// Middleware
app.use(bodyParser.json());

// Routes
app.use("/tasks", taskRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes);

// Database connection
sequelize
  .sync()
  .then(() => {
    console.log("Database connected successfully");
    // app.listen(port, () => {
    //     console.log(`Server running on port ${port}`);
    // });
  })
  .catch((error: any) => {
    console.log("Failed to connect to the database:", error);
  });



//const app = express();
//const PORT = process.env.PORT || 3001;

// Your API routes can go here
app.use(express.json());

// Create HTTP server (necessary for WebSocket)
const server = http.createServer(app);

// Initialize Elasticsearch
initializeElasticSearch()
  .then(() => {
    console.log("Elasticsearch initialized");
  })
  .catch((err) => {
    console.error("Error initializing Elasticsearch:", err);
  });

// Initialize WebSocket
initializeWebSocket(server); // Pass the HTTP server to WebSocket initializer

// Start the server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
