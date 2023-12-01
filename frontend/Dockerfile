   # Use the official Node image as the base image
   FROM node:18 as build

   # Set the working directory in the container
   WORKDIR /app

   # Copy package.json and package-lock.json to the working directory
   COPY package*.json ./

   # Install dependencies
   RUN npm install

   # Copy the source code to the working directory
   COPY . .

   # Build the React app
   RUN npm run build

   # Use Nginx as the production server
   FROM nginx:alpine

   # Copy the built React app to the Nginx server directory
   COPY --from=build /app/build /usr/share/nginx/html

   # Expose port 80
   EXPOSE 80
