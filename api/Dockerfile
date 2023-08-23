FROM node:latest

WORKDIR /usr/share/nodeApp/apiTest

COPY package.json ./
COPY package-lock.json ./
COPY app.js ./

RUN npm install

CMD ["node", "app.js"]