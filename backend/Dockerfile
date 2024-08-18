# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Expose the backend port (usually 5000)
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]
