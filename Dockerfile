FROM node:22-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN yarn install

COPY . .
