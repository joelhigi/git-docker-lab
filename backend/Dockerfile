   # Use the official Node image as the base image
   FROM node:latest

   # Set the working directory in the container
   WORKDIR /app

   # Copy package.json and package-lock.json to the working directory
   COPY package*.json ./

   # Install dependencies
   RUN npm install

   # Copy the source code to the working directory
   COPY . .

   # Expose port 8800
   EXPOSE 8800

   # Start the Express server
   CMD ["npm", "start"]
