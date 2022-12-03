FROM node:16-alpine 
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i --save
EXPOSE 3000
CMD [ "npm", "start"]
