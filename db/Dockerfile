FROM mysql:latest

EXPOSE 3306

COPY ./initDump.sql ./docker-entrypoint-initdb.d

ENV MYSQL_ROOT_PASSWORD="test1234"
ENV MYSQL_DATABASE="tf_web_mobile_2023"
ENV MYSQL_USER="evengyl"
ENV MYSQL_PASSWORD="test1234"

VOLUME [ "./var/lib/mysql" ]

