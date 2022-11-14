FROM node

WORKDIR /usr/local/app

COPY . .

RUN npm i

COPY ./node-canvas-api/node-canvas-api ./node_modules/node-canvas-api

CMD ["npm","run","start"]