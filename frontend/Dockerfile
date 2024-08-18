# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Increase Node.js memory limit
ENV NODE_OPTIONS="--max-old-space-size=2048"

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve the built app
RUN npm install -g serve

# Expose the frontend port
EXPOSE 3000

# Serve the built application
CMD ["serve", "-s", "build"]
