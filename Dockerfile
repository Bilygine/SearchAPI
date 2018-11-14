FROM node:8.10.0-alpine

WORKDIR /usr/app

COPY package.json .
COPY google_crendentials.json .

RUN npm install

COPY . .
