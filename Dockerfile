FROM node:16-alpine 
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i --save
RUN cd client && npm i --save
RUN npm run deploy
EXPOSE 3000
CMD [ "npm", "run", "start"]
