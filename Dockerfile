# Use an official base image
FROM node:18

# Set working directory in container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code
COPY . .

# Expose port (if your app needs it)
ENV PORT=8080

EXPOSE 8080

# Command to run your application
CMD ["npm", "start"]