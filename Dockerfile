FROM node:8.10.0-alpine

WORKDIR /usr/app

COPY package.json .
#TODO:
#COPY google_crendentials.json .
EXPOSE 8888
RUN npm install

COPY . .
