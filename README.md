# Real-Time Collaborative Platform

## Overview
This project is a real-time collaboration tool enabling multiple users to work on shared projects.

## Technologies Used
- **Frontend**: TypeScript, React
- **Backend**: Node.js
- **Container Orchestration**: Kubernetes
- **Database**: PostgreSQL
- **Search**: Elasticsearch
- **Cloud**: AWS

## Getting Started

### Prerequisites
- Node.js
- Docker
- Kubernetes

### Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/sophia-na/Real-Time-Collaborative-Platform-.git
  

Project Structure
 
 project-root/
|-- backend/
|   |-- Dockerfile
|   |-- package.json
|   |-- tsconfig.json
|   |-- src/
|       |-- controllers/
|       |-- models/
|       |-- routes/
|       |-- services/
|       |-- index.ts
|   |--.env
frontend/
|-- Dockerfile
|-- package.json
|-- tsconfig.json
|-- public/
|   |-- index.html
|-- src/
|   |-- index.tsx                     # Root entry file for React
|   |-- App.tsx                       # Main App component
|
|   |-- assets/                       # Static assets (images, fonts, etc.)
|   |   |-- images/
|   |   |-- fonts/
|
|   |-- components/                   # Reusable components
|   |   |-- Header.tsx                # Example reusable Header component
|   |   |-- Footer.tsx                # Example reusable Footer component
|   |   |-- Button.tsx                # Example reusable Button component
|   |   |-- forms/
|   |       |-- ProjectForm.tsx       # Project form component for creating projects
|   |       |-- LoginForm.tsx         # Login form component
|   |       |-- SignUpForm.tsx        # Sign up form component
|
|   |-- hooks/                        # Custom hooks
|   |   |-- useAuth.ts                # Custom hook for authentication logic
|   |   |-- useFetch.ts               # Custom hook for data fetching
|
|   |-- pages/                        # Main pages in the application
|   |   |-- Home.tsx                  # Home page
|   |   |-- Dashboard.tsx             # Dashboard page
|   |   |-- ProjectPage.tsx           # Project details page
|   |   |-- Auth/                     # Auth-related pages
|   |       |-- Login.tsx             # Login page
|   |       |-- SignUp.tsx            # Sign up page
|
|   |-- services/                     # API and external services
|   |   |-- api.ts                    # Base API setup (Axios instance, etc.)
|   |   |-- projectService.ts         # Service functions for handling project-related API calls
|   |   |-- authService.ts            # Service functions for handling auth-related API calls
|
|   |-- context/                      # React context providers
|   |   |-- AuthContext.tsx           # Authentication context
|   |   |-- ProjectContext.tsx        # Project context
|
|   |-- styles/                       # Global styles and CSS files
|   |   |-- variables.css             # CSS variables and themes
|   |   |-- globals.css               # Global CSS styles
|
|   |-- types/                        # TypeScript type definitions
|   |   |-- index.d.ts                # General type definitions
|   |   |-- ProjectTypes.ts           # Project-related types
|   |   |-- AuthTypes.ts              # Auth-related types
|
|   |-- utils/                        # Utility functions
|       |-- formatDate.ts             # Example utility function for date formatting
|       |-- calculateProgress.ts      # Example utility function for calculating project progress
|-- .env
|-- .gitignore
|-- README.md
