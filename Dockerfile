FROM ubuntu:latest
RUN apt update && apt install -y nodejs && apt install -y npm
WORKDIR /messenger
COPY . .
RUN npm install --production
EXPOSE 3000
CMD node server.js 