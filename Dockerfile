FROM node:latest

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/

RUN npm i --registry=https://registry.npm.taobao.org

RUN npm run build

COPY ./.output /app/.output

EXPOSE 9000

ENTRYPOINT ["npm", "run", "server"]
