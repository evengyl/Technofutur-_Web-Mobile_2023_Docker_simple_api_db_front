FROM node:latest

WORKDIR /usr/share/nodeApp/apiTest

COPY package.json ./
COPY package-lock.json ./
COPY app.js ./

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]