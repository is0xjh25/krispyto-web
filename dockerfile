# Fetching the latest node image on alpine linux
FROM node:alpine

# Setting up the work directory
WORKDIR /krispyto-web

# Installing dependencies
COPY ./package*.json /krispyto-web

RUN npm install

# Copying all the files in our project
COPY . .

EXPOSE 3000

# Starting our application
CMD ["npm","start"]