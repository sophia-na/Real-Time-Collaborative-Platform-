# # Use an official Node runtime as a base image
# FROM node:14

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of your application code
# COPY . .

# # Open up port 3001 for the application
# EXPOSE 3000

# # Command to run the application
# CMD ["npx", "ts-node", "src/index.tsx"]
 

# Use an official Node runtime as a base image
 


# Use an official Node.js runtime as a base image
# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Open up port 3000 for the application
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

