FROM node:10.16.1-alpine

WORKDIR /app

ADD package*.json ./

RUN npm install

ADD . .

ENTRYPOINT [ "npm" ]

CMD ["run", "start"]