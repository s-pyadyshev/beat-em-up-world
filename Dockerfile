FROM node:16-alpine
WORKDIR /dist
COPY package.json /dist
COPY package-lock.json /dist
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "make start" ]