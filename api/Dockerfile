FROM node:latest

WORKDIR /usr/share/nodeApp/apiTest

COPY package.json ./
COPY package-lock.json ./
COPY app.js ./

RUN npm install

EXPOSE 3000

ENV APP_MYSQL_HOST="localhost"
ENV APP_MYSQL_PORT="3308"
ENV APP_MYSQL_USER="evengyl"
ENV APP_MYSQL_PASSWORD="test1234"
ENV APP_MYSQL_DATABASE="tf_web_mobile_2023"

CMD ["node", "app.js"]