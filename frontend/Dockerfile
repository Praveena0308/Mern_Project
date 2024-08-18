# Stage 1: Build the React app
FROM node:18-alpine

WORKDIR /app

# Increase Node.js memory limit
ENV NODE_OPTIONS="--max-old-space-size=2048"

COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Serve the React app
FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build"]
